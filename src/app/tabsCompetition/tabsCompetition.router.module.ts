import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TabsCompetitionPage } from './tabsCompetition.page';

const routes: Routes = [
  {
    path: '',
    component: TabsCompetitionPage,
    children: [
      
      {
        path: 'matchs',
        children: [
          {
            path: '',
            loadChildren: () => import('../competitions/competitions.module').then(m => m.CompetitionsPageModule)
          },
          {
            path: 'matchs',
            loadChildren: () => import('../matchs/listing/match-listing.module').then(m => m.MatchListingPageModule)
          },
          {
            path: 'matchs/:productId',
            loadChildren: () => import('../matchs/details/match-details.module').then(m => m.MatchDetailsPageModule)
          }
        ]
      },
      {
        path: 'classement',
        children: [
          {
            path: '',
            loadChildren: () => import('../classement/listing/classement-listing.module').then(m => m.ClassementListingPageModule)
          }
        ]
      },
      ,
      {
        path: 'agora',
        children: [
          {
            path: '',
            loadChildren: () => import('../agora/listing/agora-listing.module').then(m => m.AgoraListingPageModule)
          }
        ]
      }
    ]
  },
  // /app/ redirect
  {
    path: '',
    redirectTo: 'app/competitions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [ ]
})
export class TabsCompetitionPageRoutingModule {}
