import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatchListingModel } from './match-listing.model';

@Component({
  selector: 'app-match-listing',
  templateUrl: './match-listing.page.html',
  styleUrls: [
    './styles/match-listing.page.scss',
    './styles/match-listing.shell.scss',
    './styles/match-listing.ios.scss'
  ]
})
export class MatchListingPage implements OnInit {
  listing: MatchListingModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.listing && this.listing.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((resolvedRouteData) => {
      const listingDataStore = resolvedRouteData['data'];

      listingDataStore.state.subscribe(
        (state) => {
          this.listing = state;
        },
        (error) => {}
      );
    },
    (error) => {});
  }
}
