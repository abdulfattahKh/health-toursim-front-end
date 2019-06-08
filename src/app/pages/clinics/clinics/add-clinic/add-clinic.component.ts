import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClinicsComponent } from '../clinics.component';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../../../../services/main.service';
import { LocationsService } from '../../../../services/locations.service';

@Component({
  selector: 'add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.scss']
})
export class AddClinicComponent implements OnInit {

  form: FormGroup;
  clinicTypes: any;
  countries: any;
  cities: any;
  states: any;
  loading: boolean = true;
  coordinates: any;
  latitude: number;
  longitude: number;
  markers: any[] = [];
  constructor(
    private tostr: ToastrService,
    private geoLocationService: LocationsService,
    private api: MainService
  ) { }

  async ngOnInit() {
    try {
      let res = await this.getSelectItems();
      if (res) {
        this.init();
        this.loading = false;
      }
    } catch (err) {
    }

    this.geoLocationService.getPosition().subscribe(
      (pos: Position) => {
        this.coordinates = {
          latitude: +(pos.coords.latitude),
          longitude: +(pos.coords.longitude)
        };
        console.log(this.coordinates)
      });
  }

  placeMarker(position: any) {
    const lat = position.coords.lat;
    const lng = position.coords.lng;

    this.markers.push({ latitude: lat, longitude: lng });
  }

  async getSelectItems() {
    return new Promise(async (resolve, reject) => {
      try {
        this.clinicTypes = await this.getItems('clinics/clinicTypes');
        this.countries = await this.getItems('location/countries');
        resolve(true);
      } catch (err) {
        reject(false);
      }
    })

  }
  init() {
    this.form = new FormGroup({
      "clinicTypes": new FormControl(null),
      "name": new FormControl(null, [Validators.required, Validators.minLength(3)]),
      "cities": new FormControl(null, [Validators.required]),
      "countries": new FormControl(null, [Validators.required]),
      "states": new FormControl(null, [Validators.required]),
      "address": new FormControl(null, [Validators.required]),
      "mobileNumber": new FormControl(null, [Validators.required, Validators.minLength(3)]),
      "phoneNumber": new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }
  onSubmit() {
    console.log(this.form);
  }

  getItems(url) {
    return new Promise((resolve, reject) => {
      this.api.get(url)
        .subscribe(data => {
          if (data['success']) {
            resolve(data['data']);
          } else {
            this.tostr.error(data['message'], 'error');
            reject(false);
          }
        }, err => {
          this.tostr.error(err['message'], 'error');
          reject(false);
        })
    })
  }

}
