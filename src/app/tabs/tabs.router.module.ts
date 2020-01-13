import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'competitions',
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
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: () => import('../user/profile/user-profile.module').then(m => m.UserProfilePageModule)
          },
          {
            path: 'friends',
            loadChildren: () => import('../user/friends/user-friends.module').then(m => m.UserFriendsPageModule)
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
export class TabsPageRoutingModule {}
