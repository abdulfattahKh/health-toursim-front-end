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
      addButtonContent: `<button class="btn btn-success"> add </button>`,
      privilege: ['addRole']
    },
    actions: {
      add: true,
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
