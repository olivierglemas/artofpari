import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as dayjs from 'dayjs';

import { AgoraListingModel } from './listing/agora-listing.model';
import { DataStore } from '../shell/data-store';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AgoraService {
  private listingDataStore: DataStore<AgoraListingModel>;

  constructor(private http: HttpClient) { }

  get relativeDates(): Array<string> {
    return [
      dayjs().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss') as string,
      dayjs().add(7, 'day').format('MM/DD/YYYY') as string,
      dayjs().subtract(1, 'month').format('MM/DD/YYYY') as string,
      dayjs().add(2, 'month').format('MM/DD/YYYY') as string
    ];
  }

  public getListingDataSource(): Observable<AgoraListingModel> {
    return this.http.get<AgoraListingModel>('./assets/sample-data/deals/listing.json').pipe(
      map(listingData => {
        // using rest operator to divide the data https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb
        const {items, ...otherData} = listingData;

        const itemsWithRelativeDates = items.map((dealItem, index) => {
          // Relative date (better to showcase UI micro-interactions)
          return {...dealItem, expirationDate: this.relativeDates[index]};
        });
        // using spread operator to concat the data https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb
        return {...otherData, items: itemsWithRelativeDates};
      })
    );
  }

  public getListingStore(dataSource: Observable<AgoraListingModel>): DataStore<AgoraListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: AgoraListingModel = new AgoraListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  

}
