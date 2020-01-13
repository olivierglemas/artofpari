import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsCompetitionPageRoutingModule } from './tabsCompetition.router.module';

import { TabsCompetitionPage } from './tabsCompetition.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsCompetitionPageRoutingModule
  ],
  declarations: [ TabsCompetitionPage ]
})
export class TabsCompetitionPageModule {}
