import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { MatchDetailsPage } from './match-details.page';
import { MatchDetailsResolver } from './match-details.resolver';
import { MatchService } from '../match.service';

const routes: Routes = [
  {
    path: '',
    component: MatchDetailsPage,
    resolve: {
      data: MatchDetailsResolver
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
    MatchDetailsPage
  ],
  providers: [
    MatchDetailsResolver,
    MatchService
  ]
})
export class MatchDetailsPageModule {}
