import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ClassementService } from '../classement.service';
import { ClassementDetailsModel } from './classement-details.model';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';

@Injectable()
export class ClassementDetailsResolver implements Resolve<any> {

  constructor(private classementService: ClassementService) {}

  resolve() {
    const dataSource: Observable<ClassementDetailsModel> = this.classementService.getDetailsDataSource();
    const dataStore: DataStore<ClassementDetailsModel> = this.classementService.getDetailsStore(dataSource);

    return dataStore;
  }
}
