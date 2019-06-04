import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class PrivilegesService {


  private privileges: {} = {};
  public promise;
  public isMyPrivilegesReady: boolean;
  constructor(
    private api: MainService,
    private tostr: ToastrService
  ) {
    this.loadMyPrivileges();
  }


  // getMyPrivileges() {
  //   this.api.get('privileges/myPrivileges')
  //     .subscribe(data => {
  //       console.log(data);
  //       if (data['success'] == true) {

  //         data['data'].forEach(privilege => {
  //           this.privileges[privilege['name']] = true;
  //           this.isMyPrivilegesReady = true;
  //         })
  //       } else {
  //         this.tostr.error('there was an error');
  //       }
  //     }, (err) => {
  //       this.tostr.error('there was an error');
  //     })
  // }


  loadMyPrivileges() {

    this.promise = this.api.get('privileges/myPrivileges').toPromise()
    return this.promise.then((data) => {
      this.privileges = {}
      data['data'].forEach((p) => {
        this.privileges[p['name']] = true
        this.isMyPrivilegesReady = true;
      })
      return true
    })
  }

  // myPrivilegesApi() {
  //   return this.api.get("privileges/myPrivileges");
  // }

  isAuthorized(privileges: any): boolean {

    if (!this.isMyPrivilegesReady) {
      this.promise.then((data) => {
        this.privileges = {}
        data['data'].forEach((p) => {
          this.privileges[p['name']] = true
        })
        return privileges.some(item => this.privileges[item]);
      })
    } else {
      return privileges.some(item => this.privileges[item]);
    }
  }

}
