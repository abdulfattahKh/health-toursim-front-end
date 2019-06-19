import { Injectable } from '@angular/core';
import { MainService } from '../../../../../services/main.service';
import { Observable, Subject } from 'rxjs';
import { ClinicService } from '../clinic.service';

@Injectable({
  providedIn: 'root'
})
export class TreatmentsService {


  addTreatmentEvent = new Subject<any>();
  constructor(
    private api: MainService,
    private clinicService: ClinicService
  ) { }

  getTreatmentsBySpecId(spec_id) {
    return new Promise((resolve, reject) => {
      this.api.get('procedure/getProcAccordToSpec/' + spec_id)
        .subscribe(data => {
          if (data['success']) {
            resolve(data['data']);
          } else {
            reject(false)
          }
        }, err => {
          reject(false);
        })
    })
  }

  getTreatmentsClinicId(clinic_id) {
    return this.api.get('procedure/getProcAccordClinic/' + clinic_id);
  }

  deleteTreatment(proc_id, spec_id) {
    let dataToSend = {
      proc_id,
      spec_id,
      clinic_id: this.clinicService.getClinicId()
    }
    return this.api.post("procedure/deleteProcedure/", dataToSend);
  }

  addTreatment(proc_id, spec_id, values) {
    let dataToSend = {
      proc_id,
      spec_id,
      clinic_id: this.clinicService.getClinicId(),
      ...values
    }
    return this.api.post('procedure/addProcedure/', dataToSend);
  }

  updateTreatment(proc_id, spec_id, values) {
    let dataToSend = {
      proc_id,
      spec_id,
      clinic_id: this.clinicService.getClinicId(),
      ...values
    }
    return this.api.post('procedure/updateProcedure', dataToSend);
  }

  getClinicSpecializations() {
    return this.api.get('procedure/getClinicSpecializations/' + this.clinicService.getClinicId());
  }

  deleteSpecialization(spec_id, clinic_id) {
    let dataToSend = {
      clinic_id,
      spec_id: spec_id
    }
    return this.api.post('procedure/deleteClinicSpecialization/', dataToSend);
  }

  setPrimary(specializations_clinics_id, clinic_id) {
    let dataToSend = {
      specializations_clinics_id,
      clinic_id
    }
    return this.api.post('procedure/putSpecializationsPrimary', dataToSend);
  }
}
