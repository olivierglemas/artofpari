import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClassementListingModel } from './classement-listing.model';

@Component({
  selector: 'app-classement-listing',
  templateUrl: './classement-listing.page.html',
  styleUrls: [
    './styles/classement-listing.page.scss',
    './styles/classement-listing.shell.scss',
    './styles/classement-listing.ios.scss'
  ]
})
export class ClassementListingPage implements OnInit {
  listing: ClassementListingModel;

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
