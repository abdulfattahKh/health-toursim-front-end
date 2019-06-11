import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../../../services/main.service';
import { CLINIC_MENU } from "../clincMenu";
@Component({
  selector: 'clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnInit {

  constructor(
    private mainService:MainService
  ) { }

  ngOnInit() {
    // this.mainService.changeMenuItems.next(CLINIC_MENU);
  }

}
