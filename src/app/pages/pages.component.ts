import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { PrivilegesService } from '../services/privileges.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../services/translation.service';
import { NbMenuItem } from '@nebular/theme';
import { FieldsService } from '../services/fields.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit {


  menu = [];
  constructor(
    private privilegesService: PrivilegesService,
    private fieldService: FieldsService
  ) { }

  ngOnInit(): void {
    //this.privilegesService.getMyPrivileges();
    if (!this.privilegesService.promise) {
      this.privilegesService.loadMyPrivileges();
    }
    this.privilegesService.promise
      .then(data => {
        this.menu = this.fieldService.getMenuItems(MENU_ITEMS);
      })
  }




}
