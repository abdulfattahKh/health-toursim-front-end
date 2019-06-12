import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../../../services/main.service';
import { CLINIC_MENU } from "../clincMenu";
import { PrivilegesService } from '../../../../../services/privileges.service';
import { FieldsService } from '../../../../../services/fields.service';
@Component({
  selector: 'clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnInit {

  menu = [];
  constructor(
    private mainService:MainService,
    private fieldService:FieldsService,
    private privilegesService:PrivilegesService
  ) { }

  ngOnInit() {
    if (!this.privilegesService.promise) {
      this.privilegesService.loadMyPrivileges();
    }
    this.privilegesService.promise
      .then(data => {
        this.menu = this.fieldService.getMenuItems(CLINIC_MENU);
      })
  }

}
