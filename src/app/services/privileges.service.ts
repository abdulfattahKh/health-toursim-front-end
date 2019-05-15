import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class PrivilegesService {


  private privileges: {} = {};
  constructor(
    private api: MainService,
    private tostr: ToastrService
  ) {
  }

  getMyPrivileges() {
    this.api.get('privileges/myPrivileges')
      .subscribe(data => {
        if (data['success'] == true) {
          data['data'].forEach(privilege => {
            this.privileges[privilege['name']] = true;
          })
        } else {
          this.tostr.error('there was an error');
        }
      }, (err) => {
        this.tostr.error('there was an error');
      })
  }

  isAuthorized(privileges: any): boolean {

    let pass: boolean = true;
    privileges.forEach(item => {
      if (!this.privileges[item]) {
        pass = false;
        return;
      }
    })
    return pass;
  }
}
