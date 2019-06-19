import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../clinic.service';
import { ToastrService } from 'ngx-toastr';
import { TreatmentsService } from './treatments.service';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss']
})
export class TreatmentsComponent implements OnInit {


  specializations: any;
  ProceduresItems: any[];
  loading: boolean = true;
  loading1:boolean = true;
  procedures: any[];
  clinicSpecializations: any;
  Form: FormGroup;
  subscriber: Subscription = new Subscription();
  constructor(
    private tostr: ToastrService,
    private clinicService: ClinicService,
    private treatmentService: TreatmentsService
  ) { }
  ngOnInit() {
    this.getSelectItems();
  }

  getSelectItems() {
    let typesSubsc = this.clinicService.getAllTypes()
      .then(data => {
        this.specializations = data;
      }, err => {
        this.tostr.error(err['message'], 'error');
      })

    let tcSubscriber = this.treatmentService.getTreatmentsClinicId(this.clinicService.getClinicId())
      .subscribe(data => {
        if (data['success']) {
          this.procedures = data['data'];
          this.extractProceduresData(this.procedures);
        }
      }, err => {
        this.procedures = [];
        this.tostr.error('there was and error', 'error');
      })
    this.subscriber.add(tcSubscriber);
    this.loading1 = true;
    let specSubscriber = this.treatmentService.getClinicSpecializations()
      .subscribe(data => {
        this.clinicSpecializations = data['data'];
        console.log(this.clinicSpecializations);
        this.loading1 = false;
      })
    this.subscriber.add(specSubscriber);
  }

  extractProceduresData(data: any[]) {
    let Form = new FormGroup({});
    data.forEach(item => {
      let formArray: FormArray;
      Object.keys(item).forEach(key => {
        formArray = new FormArray([]);
        item[key].forEach(proc => {

          let row = this.createRows(proc);
          formArray.push(row);
        })
        Form.addControl(key, formArray);
      })
    })
    this.loading = false;
    this.Form = Form;
  }

  createRows(items) {
    let formGroup = new FormGroup({});
    let formContol: FormControl;
    Object.keys(items).forEach(key => {
      formContol = new FormControl(items[key]);
      formGroup.addControl(key, formContol);
    })

    return formGroup;
  }


  onSelecteSpecialization(event) {
    this.treatmentService.getTreatmentsBySpecId(event['spec_id'])
      .then(res => {
        this.setProceduresItems(res);
      })
  }

  onSelectTreatment(event) {
  }

  setProceduresItems(event: any) {
    if (Array.isArray(event)) {
      this.ProceduresItems = event;
    } else {
      this.ProceduresItems = [];
    }
  }

  items: {} = {
    bookable: null,
    description: null,
    duration: null,
    id: null,
    img1: null,
    img2: null,
    max_price: null,
    min_price: null,
    name: null,
    num_visits: null,
    proc_id: null,
    spec_clinic_id: null,
    specializations_spec_id: null,
  }
  addTreatment(treatment) {
    let row = this.createRows(this.items);
    row.patchValue(treatment);
    let specialization = this.getSpecialization(treatment['specializations_spec_id']);
    this.treatmentService.addTreatmentEvent.next({ row, specialization, items: this.items });

  }
  getSpecialization(spec_id) {
    return this.specializations.find(item => spec_id == item.spec_id);
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
