import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { MainService } from '../../../../services/main.service';
import { ToastrService } from 'ngx-toastr';
import { RolesService } from '../roles.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'EditRoleComponent',
  templateUrl: './edit-role-component.component.html',
  styleUrls: ['./edit-role-component.component.scss']
})
export class EditRoleComponent implements OnInit {

  constructor(
    private mainService: MainService,
    private tostr: ToastrService,
    private roleService: RolesService,
    private router: ActivatedRoute
  ) { };
  items: any;
  roleId: number;
  loading: boolean;
  privileges: { name: string, privilege_id: number }[];
  roleForm: FormGroup;
  defaultRoles: any[];
  ngOnInit() {
    this.router.params.subscribe(params => {
      this.roleId = params['id'];
      this.getRoleInfo();
    })
  }
  getRoleInfo() {
    this.loading = true;
    this.roleService.getRoleInfo(this.roleId).subscribe(data => {
      if (data['success']) {
        this.init(data['data'][0]);
        this.tostr.success('data was fetched correctlty', 'success');
      } else {
        this.loading = false;
        this.tostr.error('there was an error', 'error');
      }
    }, err => {
      this.tostr.error('there was an error');
    });
  }

  submit() {
  }

  onChange(type, value) {
    if (!this.roleForm.get(type).valid)
      return;
    this.roleService.editRole(this.roleId, type, value)
      .subscribe(data => {
        if (data['success']) {
          this.tostr.success(data['message'], "success");
        } else {
          this.tostr.error(data['message'], 'error');
        }
      }, err => {
        this.tostr.error(err['message'], 'error');
      });

  }

  init(data) {
    this.mainService.get('privileges/privilegeByRoleId/' + this.roleId)
      .subscribe(privileges => {
        if (privileges['success']) {
          console.log(privileges['data'])
          // this.roleForm.get('privileges').setValue(data['data']);
          // this.roleForm.get('privileges').updateValueAndValidity();
          this.roleForm = new FormGroup({
            name: new FormControl(data['name'], [Validators.required, Validators.minLength(3)]),
            description: new FormControl(data['description']),
            privileges: new FormControl(privileges['data'])
          })
          this.loading = false;
        } else {
        }
      }, err => {
        this.tostr.error(err['message']);
      })







    this.privileges = [];
    this.mainService.get('privileges/getAllPrivileges/')
      .subscribe(data => {
        if (data['success']) {
          this.privileges = data['data'];
        } else {
          this.privileges = [];
        }
      }, err => {
        this.tostr.error(err['message']);
      })
  }
}
