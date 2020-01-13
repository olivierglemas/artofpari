import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MatchService } from '../match.service';
import { MatchListingModel } from './match-listing.model';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';

@Injectable()
export class MatchListingResolver implements Resolve<any> {

  constructor(private matchService: MatchService) {}

  resolve() {
    const dataSource: Observable<MatchListingModel> = this.matchService.getListingDataSource();
    const dataStore: DataStore<MatchListingModel> = this.matchService.getListingStore(dataSource);

    return dataStore;
  }
}
