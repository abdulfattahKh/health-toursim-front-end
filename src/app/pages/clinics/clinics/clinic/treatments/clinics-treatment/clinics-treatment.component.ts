import { Component, OnInit, Input, SimpleChanges, OnChanges, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { TreatmentsService } from '../treatments.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clinic-treatment',
  templateUrl: './clinics-treatment.component.html',
  styleUrls: ['./clinics-treatment.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ClinicsTreatmentComponent implements OnInit, OnChanges {

  @Input('items') items: any[];
  @Input('FORM') formGroup: FormGroup;

  customClass = 'customClass';
  isFirstOpen = true;
  obj = {};
  desplayForm: boolean;
  subscription:Subscription = new Subscription();
  constructor(
    private cd: ChangeDetectorRef,
    private tostrService: ToastrService,
    private treatmentService: TreatmentsService
  ) { }

  ngOnInit() {
    this.changeObj();
    this.treatmentService.addTreatmentEvent.subscribe(data => {
      this.addTreatments(data['row'], data['specialization'], data['items']);
    })
  }

  changeObj() {
    this.items.forEach(item => {
      Object.keys(item).forEach(key => {
        this.obj[key] = item[key];
      })
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  addTreatments(row, specialization, items) {
    this.items.push({
      [specialization['name']]: [items]
    })
    if (!this.formGroup.get(specialization['name'])) {
      let formArray = new FormArray([]);
      formArray.push(row);
      this.formGroup.addControl(specialization['name'], formArray);
    } else {
      (<FormArray>this.formGroup.get(specialization['name'])).push(row);
    }
    this.formGroup.updateValueAndValidity();
    let addSubscriber = this.treatmentService.addTreatment(1, 1, {})
      .subscribe(data => {
        if (data['success']) {
          this.tostrService.success('it was added successfuly', 'success');
        }
      }, err => {
        this.tostrService.error('there was an error', 'error');
      })
      this.subscription.add(addSubscriber);
    this.changeObj();
  }
  deleteProcedure(section, index: number) {
    let proc = this.formGroup.get(section).get(index.toString());
    let proc_id = proc.get('proc_id').value;
    let spec_id = proc.get('spec_clinic_id').value;
    const deleteSubscription = this.treatmentService.deleteTreatment(proc_id, spec_id)
      .subscribe(data => {
        if (data['success']) {
          (<FormArray>this.formGroup.get(section)).removeAt(index);
          this.tostrService.success('it was deleted successfuly', 'success');
        }
      }, err => {
        this.tostrService.error('there was an error', 'error');
      })
      this.subscription.add(deleteSubscription);
  }


  changeValue(section, index: number) {
    let proc = this.formGroup.get(section).get(index.toString());
    let proc_id = proc.get('proc_id').value;
    let spec_id = proc.get('spec_clinic_id').value;
    let values = proc.value;
    const updateSubscriber = this.treatmentService.updateTreatment(proc_id, spec_id, { ...values })
      .subscribe(data => {
        if (data['success']) {
          this.tostrService.success('it was updated successfuly');
        }
      }, err => {
        this.tostrService.error('there was an error', 'error');
      })
      this.subscription.add(updateSubscriber);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
