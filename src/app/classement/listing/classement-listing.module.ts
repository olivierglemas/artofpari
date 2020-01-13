import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { ClassementListingPage } from './classement-listing.page';
import { ClassementListingResolver } from './classement-listing.resolver';
import { ClassementService } from '../classement.service';

const routes: Routes = [
  {
    path: '',
    component: ClassementListingPage,
    resolve: {
      data: ClassementListingResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    PipesModule,
    HttpClientModule
  ],
  declarations: [
    ClassementListingPage
  ],
  providers: [
    ClassementListingResolver,
    ClassementService
  ]
})
export class ClassementListingPageModule {}
