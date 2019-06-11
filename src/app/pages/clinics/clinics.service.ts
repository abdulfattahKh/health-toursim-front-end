import { Injectable } from '@angular/core';
import { MainService } from '../../services/main.service';
import { AuthService } from '../../Auth/Auth.service';
import { EventEmitter } from 'events';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {

  changeMenu = new Subject();

  constructor(
    private api: MainService,
    private authService: AuthService
  ) { }

  getUserId() {
    return this.authService.getUserId();
  }

  addClinic(data) {
    return this.api.post('clinics/addClinic', data);
  }
}
