import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../../../services/main.service';
import { CLINIC_MENU } from "../clincMenu";
import { PrivilegesService } from '../../../../../services/privileges.service';
import { FieldsService } from '../../../../../services/fields.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClinicService } from '../clinic.service';
@Component({
  selector: 'clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnInit {

  menu = [];
  clinicId: number;
  constructor(
    private mainService: MainService,
    private fieldService: FieldsService,
    private clinicService: ClinicService,
    private activatedroute: ActivatedRoute,
    private privilegesService: PrivilegesService
  ) { }

  ngOnInit() {
    console.log('clinic');
    if (!this.privilegesService.promise) {
      this.privilegesService.loadMyPrivileges();
    }
    this.privilegesService.promise
      .then(data => {
        this.menu = this.fieldService.getMenuItems(CLINIC_MENU);
      })

    this.activatedroute.params.subscribe(param => {
      this.clinicId = param['id'];
      this.clinicService.setClinicId(this.clinicId);
    })
  }

}
