import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { PrivilegesService } from '../services/privileges.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../services/translation.service';
import { NbMenuItem } from '@nebular/theme';

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
    private translate: TranslationService
  ) { }

  ngOnInit(): void {
    //this.privilegesService.getMyPrivileges();
    if (!this.privilegesService.promise) {
      this.privilegesService.loadMyPrivileges();
    }
    this.privilegesService.promise
      .then(data => {
        this.menu = this.getMenuItems(MENU_ITEMS);
      })
  }

  getMenuItems(list: NbMenuItem[]) {
    let out = [];
    for (var i = 0; i < list.length; i++) {
      if (
        !list[i].data
        || list[i].data.length == 0
        || this.privilegesService.isAuthorized(list[i]['data']['privilege'])) {
        list[i].title = this.translate.translateWord("List." + list[i].title);
        out.push(list[i]);
      }
      if (list[i].children) {
        list[i].children = this.getMenuItems(list[i].children);
      }
    }
    return out;
  }


}
