import { Injectable } from '@angular/core';
import { MainService } from '../../../../../services/main.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreatmentsService {

  constructor(
    private api: MainService
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
}
