import { Component } from '@angular/core';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabsCompetition',
  templateUrl: 'tabsCompetition.page.html',
  styleUrls: [
    './styles/tabsCompetition.page.scss'
  ]
})
export class TabsCompetitionPage  {

  constructor(public menu: MenuController) { }

  ionViewWillEnter() {
    this.menu.enable(true);
  }
}
