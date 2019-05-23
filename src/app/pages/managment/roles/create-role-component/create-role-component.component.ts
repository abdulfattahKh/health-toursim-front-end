import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { MainService } from '../../../../services/main.service';
import { ToastrService } from 'ngx-toastr';
import { RolesService } from '../roles.service';

@Component({
  selector: 'CreateRoleComponent',
  templateUrl: './create-role-component.component.html',
  styleUrls: ['./create-role-component.component.scss']
})
export class CreateRoleComponent implements OnInit {

  constructor(
    private mainService: MainService,
    private tostr: ToastrService,
    private roleService: RolesService
  ) { };
  items: any;
  privileges: { name: string, privilege_id: number }[];
  roleForm: FormGroup;

  ngOnInit() {
    this.init();
  }

  submit() {
    this.roleService.addRoleAndPrivileges(this.roleForm.value)
      .subscribe(data => {
        if (data['success'] == true) {
          this.tostr.success('role was added successfuly');
        } else {
          this.tostr.error('there was an error');
        }
      }, err => {
        this.tostr.error('there was an error');
      })
  }
  init() {
    this.roleForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      privileges: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
    this.privileges = [];
    this.mainService.get('privileges/getAllPrivileges')
      .subscribe(data => {
        if (data['success']) {
          this.privileges = data['data'];
        } else {
          this.privileges = [];
        }
        console.log(data['data']);
      }, err => {
        this.tostr.error('there was an error');
      })
  }
}
