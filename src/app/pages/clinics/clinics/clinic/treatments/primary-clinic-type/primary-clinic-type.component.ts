import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { TreatmentsService } from '../treatments.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'primary-clinic-type',
  templateUrl: './primary-clinic-type.component.html',
  styleUrls: ['./primary-clinic-type.component.scss']
})
export class PrimaryClinicTypeComponent implements OnInit {
  @Input('clinicSpecializations') clinicSpecializations: any;
  subscriber: Subscription = new Subscription();
  constructor(
    private tostr: ToastrService,
    private treatmentService: TreatmentsService
  ) { }

  ngOnInit() {
    console.log(this.clinicSpecializations);
  }

  primary(spec, index: number) {
    console.log(spec);
    let specSubscriber = this.treatmentService.setPrimary(spec['specializations_clinics_id'],spec['clinic_id'])
      .subscribe(data => {
        if (data['success']) {
          this.tostr.success('it was added successfuly', 'success');
        }
      }, err => {
        this.tostr.error('it was not deleted successfuly', 'error');
      })
    this.subscriber.add(specSubscriber);
  }

  delete(spec, index: number) {
    console.log(spec);
    let subsc = this.treatmentService.deleteSpecialization(spec['specializations_clinics_id'],spec['clinic_id'])
      .subscribe(data => {
        if (data['success']) {
          this.tostr.success('it was added successfuly', 'success');
        }
      }, err => {
        this.tostr.error('it was not deleted successfuly', 'error');
      })
    this.subscriber.add(subsc);
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
