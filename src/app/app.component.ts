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
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './services/translation.service';
@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    // private analytics: AnalyticsService,
    private authService: AuthService,
    private privilegesService: PrivilegesService,
    private Translate: TranslateService,
    private translation: TranslationService
  ) {
  }

  ngOnInit() {
    // this.analytics.trackPageViews();
    this.authService.autoAuth();
    this.translation.checkLang();
  }
}
