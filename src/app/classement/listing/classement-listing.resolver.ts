import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ClassementService } from '../classement.service';
import { ClassementListingModel } from './classement-listing.model';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';

@Injectable()
export class ClassementListingResolver implements Resolve<any> {

  constructor(private classementService: ClassementService) {}

  resolve() {
    const dataSource: Observable<ClassementListingModel> = this.classementService.getListingDataSource();
    const dataStore: DataStore<ClassementListingModel> = this.classementService.getListingStore(dataSource);

    return dataStore;
  }
}
