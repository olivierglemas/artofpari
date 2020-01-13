import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClassementDetailsModel } from './classement-details.model';

@Component({
  selector: 'app-classement-details',
  templateUrl: './classement-details.page.html',
  styleUrls: [
    './styles/classement-details.page.scss',
    './styles/classement-details.shell.scss'
  ]
})
export class ClassementDetailsPage implements OnInit {
  details: ClassementDetailsModel;
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
