import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'privileges-table',
  templateUrl: './privileges-table.component.html',
  styleUrls: ['./privileges-table.component.scss']
})
export class PrivilegesTableComponent implements OnInit {

  constructor() { }
  lang = localStorage.getItem('lang');
  settings = {
    mode: "external",
    attr: {
      class: "text-center"
    },
    add: {
      addButtonContent: '<i  class="ion-ios-plus-outline"></i>',
      privilege: ['addPrivilege']
    },
    delete: {
      deleteButtonContent: `<i class="nb-trash"></i>`,
      privilege: ['deletePrivilege'],
      confirm: true
    },
    edit: {
      editButtonContent: `<i class="nb-edit"></i>`,
      privilege: ['editPrivilege']
    },
    actions: {
      add: true,
      delete: true,
      edit: true,
      position: this.lang == 'ar' ? 'left' : 'right'
    },
    columns: {}
  };
  ngOnInit() {
  }

}
