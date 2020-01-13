import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as dayjs from 'dayjs';

import { ClassementListingModel } from './listing/classement-listing.model';
import { ClassementDetailsModel } from './details/classement-details.model';
import { DataStore } from '../shell/data-store';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClassementService {
  private listingDataStore: DataStore<ClassementListingModel>;
  private detailsDataStore: DataStore<ClassementDetailsModel>;

  constructor(private http: HttpClient) { }

  get relativeDates(): Array<string> {
    return [
      dayjs().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss') as string,
      dayjs().add(7, 'day').format('MM/DD/YYYY') as string,
      dayjs().subtract(1, 'month').format('MM/DD/YYYY') as string,
      dayjs().add(2, 'month').format('MM/DD/YYYY') as string
    ];
  }

  public getListingDataSource(): Observable<ClassementListingModel> {
    return this.http.get<ClassementListingModel>('./assets/sample-data/deals/listing.json').pipe(
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

  public getListingStore(dataSource: Observable<ClassementListingModel>): DataStore<ClassementListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: ClassementListingModel = new ClassementListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsDataSource(): Observable<ClassementDetailsModel> {
    return this.http.get<ClassementDetailsModel>('./assets/sample-data/deals/details.json').pipe(
      map(detailsData => {
        const expirationDate = dayjs().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss') as string;
        return {...detailsData, expirationDate};
      })
    );
  }

  public getDetailsStore(dataSource: Observable<ClassementDetailsModel>): DataStore<ClassementDetailsModel> {

    // Initialize the model specifying that it is a shell model
    const shellModel: ClassementDetailsModel = new ClassementDetailsModel();
    this.detailsDataStore = new DataStore(shellModel);
    // Trigger the loading mechanism (with shell) in the dataStore
    this.detailsDataStore.load(dataSource);

    return this.detailsDataStore;
  }

}
