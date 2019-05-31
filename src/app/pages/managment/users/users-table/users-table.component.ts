import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  constructor() { }
  lang = localStorage.getItem('lang');
  settings = {
    mode: "external",
    attr: {
      class: "text-center"
    },
    add: {
      addButtonContent: '<i  class="ion-ios-plus-outline"></i>',
      privilege: ['addUsers']
    },
    delete: {
      deleteButtonContent:`<i class="nb-trash"></i>`,
      privilege:['deleteUsers'],
      confirm:true
    },
    edit:{
      editButtonContent:`<i class="nb-edit"></i>`,
      privilege:['editUsers']
    },
    actions: {
      add: true,
      delete:true,
      edit:true,
      position: this.lang == 'ar' ? 'left' : 'right'
    },
    columns: {}
  };
  ngOnInit() {
  }

}
