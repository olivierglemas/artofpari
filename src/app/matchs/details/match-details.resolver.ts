import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MatchService } from '../match.service';
import { MatchDetailsModel } from './match-details.model';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';

@Injectable()
export class MatchDetailsResolver implements Resolve<any> {

  constructor(private matchService: MatchService) {}

  resolve() {
    const dataSource: Observable<MatchDetailsModel> = this.matchService.getDetailsDataSource();
    const dataStore: DataStore<MatchDetailsModel> = this.matchService.getDetailsStore(dataSource);

    return dataStore;
  }
}
