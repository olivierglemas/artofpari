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
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
          }
        ]
      },
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
