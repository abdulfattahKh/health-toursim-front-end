import { Injectable } from '@angular/core';
import { MainService } from '../../../../services/main.service';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  private clinicId: number;
  constructor(
    private api: MainService
  ) { }
  setClinicId(clinicId) {
    this.clinicId = clinicId;
  }

  getClinicId() {
    return this.clinicId;
  }

  getClinicInfo() {
    return this.api.get('clinics/clinicById' + "/" + this.clinicId);
  }

  getClinicTypes() {
    return new Promise((resolve, reject) => {
      this.api.get('clinics/clinicTypesById/' + this.clinicId)
        .subscribe(data => {
          if (data['success']) {
            resolve(data['data']);
          }
        }, err => {
          reject(false);
        })
    })
  }


  getAllTypes() {
    return new Promise((resolve,reject)=>{
      this.api.get('clinics/clinicTypes')
      .subscribe(data=>{
        if(data['success']) {
          resolve(data['data']);
        } else{
          reject(false);
        }
      },err=>{
        reject(false);
      })
    })
  }

  getClinicDescription() {
    return new Promise((resolve, reject) => {
      this.api.get('clinics/getDescreption/' + this.clinicId)
        .subscribe(data => {
          if (data['success'])
            resolve(data['data']);
        }, err => {
          reject(false);
        })
    })
  }

  getClinicCity() {
    return new Promise((resolve, reject) => {
      this.api.get('clinics/getClinicCity' + "/" + this.clinicId).subscribe(data => {
        if (data['success']) {
          resolve(data['data']);
        }
      }, err => {
        reject(false);
      })
    })
  }

  getClinicCountry() {
    return new Promise((resolve, reject) => {
      this.api.get('clinics/getClinicCountry' + "/" + this.clinicId).subscribe(data => {
        if (data['success']) {
          resolve(data['data']);
        }
      }, err => {
        reject(false);
      })
    })
  }


  getClinicstate() {
    return new Promise((resolve, reject) => {
      this.api.get('clinics/getClinicState' + "/" + this.clinicId).subscribe(data => {
        if (data['success']) {
          resolve(data['data']);
        }
      }, err => {
        reject(false);
      })
    })
  }

  addescription(descreption: string) {
    return new Promise((resolve, reject) => {
      this.api.put('clinics/addDescreption', { descreption, clinicId: this.clinicId })
        .subscribe(data => {
          if (data['success'])
            resolve(true);
        }, err => {
          reject(false);
        })
    })
  }

  editClinic(info) {
    let dataToSend = {
      ...info,
    }
    return this.api.post('clinics/editClinic/' + this.clinicId, dataToSend);
  }
  saveValues(url, data) {
    return this.api.put(url, data);
  }


  addCurrency(value) {
    return this.api.put('clinics/editCurrency/' + this.clinicId, { value })
  }

  getAllCurrencies() {
    return new Promise((resolve, reject) => {
      this.api.get('clinics/getAllCurrencies')
        .subscribe(data => {
          if (data['success']) {
            resolve(data['data']);
          }
        }, err => {
          reject(false);
        })
    })
  }

  getCurrencies() {
    return new Promise((resolve, reject) => {
      this.api.get('clinics/getCurrencies/' + this.clinicId)
        .subscribe(data => {
          if (data['success']) {
            resolve(data['data']);
          }
        }, err => {
          reject(false);
        })
    })
  }

  addImages(data) {
    let clinicId = this.clinicId;
    data.append('clinicId',this.clinicId.toString());
    return this.api.post('clinics/addImage',data);
  }

  getImages() {
    return this.api.get('clinics/deleteImage/' + this.clinicId);
  }
  
  deleteImage(imageId) {
    return this.api.delete('clinics/deleteImage',imageId);
  }

}
