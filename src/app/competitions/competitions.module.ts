import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

import { CompetitionsPage } from './competitions.page';

const competitionsRoutes: Routes = [
  {
    path: '',
    component: CompetitionsPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(competitionsRoutes),
    ComponentsModule
  ],
  declarations: [ CompetitionsPage ]
})
export class CompetitionsPageModule {}
