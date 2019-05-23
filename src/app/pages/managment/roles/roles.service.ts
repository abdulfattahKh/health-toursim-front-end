import { Injectable } from '@angular/core';
import { MainService } from '../../../services/main.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private api: MainService) {
  }

  addRoleAndPrivileges(data) {
    return this.api.post('Privileges/addRoleWithPrivileges', data);
  }
}
