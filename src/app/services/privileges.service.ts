import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { ToastrService } from 'ngx-toastr';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class PrivilegesService {

  constructor() { }

  isAuthorized(privileges) {
    const token = localStorage.getItem('token');
    const tokenPayload = decode(token);
    return privileges.some(privilege => privilege == tokenPayload.roleId);
  }
}
