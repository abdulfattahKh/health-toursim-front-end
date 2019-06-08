/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AuthService } from './Auth/Auth.service';
import { TranslationService } from './services/translation.service';
@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private translation: TranslationService
  ) {
  }

  ngOnInit() {
    this.translation.checkLang();
    this.authService.autoAuth();
  }
}
