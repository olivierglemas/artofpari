import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AgoraListingModel } from './agora-listing.model';

@Component({
  selector: 'app-agora-listing',
  templateUrl: './agora-listing.page.html',
  styleUrls: [
    './styles/agora-listing.page.scss',
    './styles/agora-listing.shell.scss',
    './styles/agora-listing.ios.scss'
  ]
})
export class AgoraListingPage implements OnInit {
  listing: AgoraListingModel;

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
