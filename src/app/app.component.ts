/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { AuthService } from './Auth/Auth.service';
import { PrivilegesService } from './services/privileges.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    // private analytics: AnalyticsService,
    private authService: AuthService,
    private privilegesService: PrivilegesService
  ) {
  }

  ngOnInit() {
    // this.analytics.trackPageViews();
    this.privilegesService.getMyPrivileges();
    this.authService.autoAuth();
  }
}
