import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AgoraService } from '../agora.service';
import { AgoraListingModel } from './agora-listing.model';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';

@Injectable()
export class AgoraListingResolver implements Resolve<any> {

  constructor(private agoraService: AgoraService) {}

  resolve() {
    const dataSource: Observable<AgoraListingModel> = this.agoraService.getListingDataSource();
    const dataStore: DataStore<AgoraListingModel> = this.agoraService.getListingStore(dataSource);

    return dataStore;
  }
}
