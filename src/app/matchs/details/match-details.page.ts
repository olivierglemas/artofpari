import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatchDetailsModel } from './match-details.model';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.page.html',
  styleUrls: [
    './styles/match-details.page.scss',
    './styles/match-details.shell.scss'
  ]
})
export class MatchDetailsPage implements OnInit {
  details: MatchDetailsModel;
  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };

  @HostBinding('class.is-shell') get isShell() {
    return (this.details && this.details.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((resolvedRouteData) => {
      const detailsDataStore = resolvedRouteData['data'];

      detailsDataStore.state.subscribe(
        (state) => {
          this.details = state;
        },
        (error) => {}
      );
    },
    (error) => {});
  }
}
