import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { MENU_ITEMS } from '../clinics-menu';
import { FieldsService } from '../../../services/fields.service';
import { PrivilegesService } from '../../../services/privileges.service';
@Component({
  selector: 'clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.scss']
})
export class ClinicsComponent implements OnInit {

  constructor(
    private fieldService: FieldsService,
    private privilegesService: PrivilegesService
  ) { }
  menu = [];
  ngOnInit() {
    if (!this.privilegesService.promise) {
      this.privilegesService.loadMyPrivileges();
    }
    this.privilegesService.promise
      .then(data => {
        this.menu = this.fieldService.getMenuItems(MENU_ITEMS);
      })
  }

}
