import { Injectable } from '@angular/core';
import { MainService } from '../../services/main.service';
import { AuthService } from '../../Auth/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {

  constructor(
    private api: MainService,
    private authService: AuthService
  ) { }

  getUserId() {
    return this.authService.getUserId();
  }
}
