import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { AgoraListingPage } from './agora-listing.page';
import { AgoraListingResolver } from './agora-listing.resolver';
import { AgoraService } from '../agora.service';

const routes: Routes = [
  {
    path: '',
    component: AgoraListingPage,
    resolve: {
      data: AgoraListingResolver
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
    AgoraListingPage
  ],
  providers: [
    AgoraListingResolver,
    AgoraService
  ]
})
export class AgoraListingPageModule {}
