import { Injectable } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { AuthService } from '../Auth/Auth.service';
import { NbMenuItem } from '@nebular/theme';
import { PrivilegesService } from './privileges.service';
import { TranslationService } from './translation.service';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  constructor(
    private AuthService: AuthService,
    private privilegesService: PrivilegesService,
    private translate: TranslationService
  ) { }

  validators: Validators[];

  getMenuItems(list: NbMenuItem[]) {
    let out = [];
    for (var i = 0; i < list.length; i++) {
      if (
        !list[i].data
        || list[i].data.length == 0
        || this.privilegesService.isAuthorized(list[i]['data']['privilege'])) {
        list[i].title = this.translate.translateWord(list[i].title);
        out.push(list[i]);
      }
      if (list[i].children) {
        list[i].children = this.getMenuItems(list[i].children);
      }
    }
    return out;
  }

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
      ,
      fields['addClinic'] = [
        {
          name: 'specialization',
          type: 'selectApi',
          label: 'specialization',
          apiName: 'clinics/clinicTypes',
          bindLabel: 'name',
          bindValue: 'id',
          validators: [Validators.required, Validators.minLength(3)], colClasses: ['row', 'col-6', 'my-2'], inputClasses: ['mt-1']
        },
        {
          name: 'clinicsName',
          type: 'text',
          label: 'clinicsName',
          validators: [Validators.required,
          Validators.minLength(3)],
          colClasses: ['justify-content-center', 'row', 'col-6', 'my-2'],
          inputClasses: ['mt-1']
        },
        {
          name: 'country',
          type: 'selectApi',
          label: 'country',
          apiName: 'location/countries',
          bindLabel: 'country_name',
          bindValue: 'country_id',
          validators: [Validators.required],
          colClasses: ['col-2', 'my-2'],
          inputClasses: ['mt-1']
        },

        {
          name: 'city',
          type: 'selectApi',
          label: 'city',
          apiName: 'location/city',
          bindLabel: 'name',
          bindValue: 'id',
          basedOn: ['country'],
          validators: [Validators.required],
          colClasses: ['col-2', 'my-2'],
          inputClasses: ['mt-1']
        },
        {
          name: 'state',
          type: 'selectApi',
          label: 'state',
          apiName: 'location/state/0',
          bindLabel: 'name',
          bindValue: 'id',
          basedOn: ['city'],
          validators: [Validators.required],
          colClasses: ['col-2', 'my-2'],
          inputClasses: ['mt-1']
        },
      ]
    return fields[name];
  }

  getTableInfo(tableName) {
    var fields = {};
    fields['users'] = [
      "firstName", "lastName", "email", "gender", "birthday", "mobileNumber"],
      fields['clinics'] = [
        "clinicName", "fOwnerName", "lOwnerName", "email", "city", "country", "descrption"
      ]
    fields['roles'] = [
      'name', 'description'],
      fields['privileges'] = [
        'name', 'description'
      ]
    return fields[tableName]
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
