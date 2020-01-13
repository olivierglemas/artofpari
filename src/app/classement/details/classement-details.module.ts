import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { ClassementDetailsPage } from './classement-details.page';
import { ClassementDetailsResolver } from './classement-details.resolver';
import { ClassementService } from '../classement.service';

const routes: Routes = [
  {
    path: '',
    component: ClassementDetailsPage,
    resolve: {
      data: ClassementDetailsResolver
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
    ClassementDetailsPage
  ],
  providers: [
    ClassementDetailsResolver,
    ClassementService
  ]
})
export class ClassementDetailsPageModule {}
