import { Injectable } from '@angular/core';
import { MainService } from '../../../services/main.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private api: MainService) {
  }

  addRoleAndPrivileges(data) {
    return this.api.post('roles/addRoleWithPrivileges', data);
  }

  editRole(type, value) {
    return this.api.post('roles/editRole?feildName=' + type, value);
  }
  getRoleInfo(id) {
    return this.api.get('roles/role/' + id);
  }
}
