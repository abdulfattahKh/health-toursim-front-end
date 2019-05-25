import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'RolesTableComponent',
  templateUrl: './roles-table-component.component.html',
  styleUrls: ['./roles-table-component.component.scss']
})
export class RolesTableComponent implements OnInit {

  lang = localStorage.getItem('lang');
  settings = {
    mode: "external",
    attr: {
      class: "text-center"
    },
    add: {
      addButtonContent: '<i  class="ion-ios-plus-outline"></i>',
      privilege: ['addRole']
    },
    delete: {
      deleteButtonContent:`<i class="nb-trash"></i>`,
      privilege:['deleteRole'],
      confirm:true
    },
    edit:{
      editButtonContent:`<i class="nb-edit"></i>`,
      privilege:['editRole']
    },
    actions: {
      add: true,
      delete:true,
      edit:true,
      position: this.lang == 'ar' ? 'left' : 'right'
    },
    columns: {}
  };

  constructor() { };

  ngOnInit() {
  }
  rowSelect(event) {
    console.log(event)
  }
}
