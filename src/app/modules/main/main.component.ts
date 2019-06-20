import { Component, OnInit } from '@angular/core';
import { FieldsService } from '../../services/fields.service';
import { PrivilegesService } from '../../services/privileges.service';
import { MENU_ITEMS } from "../main.list";
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  menu: any[] = [];
  constructor(
    private fieldService: FieldsService,
    private privilegesService: PrivilegesService,
  ) { }

  ngOnInit() {
    
    this.menu = this.fieldService.getMenuItems(MENU_ITEMS);
  }

}
