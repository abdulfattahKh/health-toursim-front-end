import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../clinic.service';
import { ToastrService } from 'ngx-toastr';
import { TreatmentsService } from './treatments.service';

@Component({
  selector: 'treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss']
})
export class TreatmentsComponent implements OnInit {


  specializations: any;
  ProceduresItems: any[];
  constructor(
    private tostr: ToastrService,
    private clinicService: ClinicService,
    private treatmentService: TreatmentsService
  ) { }
  ngOnInit() {
    this.getSelectItems();
  }

  getSelectItems() {
    this.clinicService.getAllTypes()
      .then(data => {
        console.log(data);
        this.specializations = data;
      }, err => {
        this.tostr.error(err['message'], 'error');
      })
  }


  onSelecteSpecialization(event) {
    this.treatmentService.getTreatmentsBySpecId(event['spec_id'])
      .then(res => {
        this.setProceduresItems(res);
      })
  }

  onSelectTreatment(event) {
  }

  setProceduresItems(event:any) {
    this.ProceduresItems = event;
  }

}
