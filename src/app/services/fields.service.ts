import { Injectable } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { AuthService } from '../Auth/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  constructor(
    private AuthService: AuthService
  ) { }

  validators: Validators[];
  getFields(name) {
    var fields = {};
    fields['addRole'] = [
      // { name: "role_id", type: "selectApi", apiName: "roles/roles", bindLable: "role_id", bindValue: "role_name", label: "role id" }
    ]
    fields['users'] = [
      { name: 'first_name', type: 'text', label: 'firstName', validators: [Validators.required, Validators.minLength(3)], colClasses: ['col-5', 'my-2'], inputClasses: ['mt-1'] },
      { name: 'last_name', type: 'text', label: 'lastName', validators: [Validators.required], colClasses: ['col-5', 'my-2'], inputClasses: ['mt-1'] },
      { name: 'email', type: 'text', label: 'email', validators: [Validators.required], asyncValidators: [this.checkEmail.bind(this)], colClasses: ['col-10', 'my-2'], inputClasses: ['mt-1'] },
      { name: 'password', type: 'password', label: 'password', validators: [Validators.required], colClasses: ['col-10', 'my-2'], inputClasses: ['mt-1'] },
      // { name: 'confirmPassword', type: 'password', label: 'confirmPassword', validators: [Validators.required], colClasses: ['col-10', 'my-2'], inputClasses: ['mt-1'] },
      { name: 'birthday', type: 'date', label: 'birthday', validators: [Validators.required], colClasses: ['col-5', 'my-2'], inputClasses: ['mt-1'] },
      { name: 'mobile_number', type: 'number', label: 'mobileNumber', validators: [Validators.required], colClasses: ['col-5', 'my-2'], inputClasses: ['mt-1'] },
      // { name: 'roleName', type: 'selectApi', apiName: "roles/roles", bindLabel: 'name', bindValue: 'id', label: 'roleName', validators: [Validators.required], colClasses: ['col-5', 'my-2'], inputClasses: ['mt-1'] }
      { name: 'role_id', type: 'selectApi', disabled: "true", apiName: "roles/roles", bindLabel: 'name', bindValue: 'id', label: 'role', validators: [Validators.required], colClasses: ['col-5', 'my-2'], inputClasses: ['mt-1'] }
    ],

      fields['permissions'] = [
        { name: 'name', type: 'text', label: 'privilegeName', validators: [Validators.required, Validators.minLength(3)], colClasses: ['col-7', 'my-2'], inputClasses: ['mt-1'] },
        { name: 'description', type: 'text', label: 'description', validators: [Validators.required, Validators.minLength(3)], colClasses: ['col-7', 'my-2'], inputClasses: ['mt-1'] }
      ]
    return fields[name];
  }

  checkEmail(control: FormControl) {
    const promise = new Promise((reslove, rejcet) => {
      this.AuthService.checkEmail(control.value).subscribe(response => {
        const RES = response.json();
        if (!RES.success) {
          reslove({ emailIsUsed: true });
        } else {
          reslove(null);
        }
      });
    });

    return promise;
  }
}
