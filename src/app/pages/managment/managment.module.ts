import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { managmentComponent } from './managment.component';
import { managmentRoutingModule } from './managment-routing.module';
import { RolesComponent } from './roles/roles.component';
import { UtilitiesModule } from '../../utilties/utilities.module';
import { ThemeModule } from '../../@theme/theme.module';
import { RolesTableComponent } from './roles/roles-table-component/roles-table-component.component';
import { CreateRoleComponent } from './roles/create-role-component/create-role-component.component';
import { EditRoleComponent } from './roles/edit-role-component/edit-role-component.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UsersComponent } from './users/users.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { PrivilegesFormComponent } from './privileges/privileges-form/privileges-form.component';
import { PrivilegesTableComponent } from './privileges/privileges-table/privileges-table.component';

const Components = [
]

@NgModule({
  declarations: [
    managmentComponent,
    RolesComponent,
    RolesTableComponent,
    CreateRoleComponent,
    EditRoleComponent,
    UsersComponent,
    UsersTableComponent,
    UsersFormComponent,
    PrivilegesComponent,
    PrivilegesFormComponent,
    PrivilegesTableComponent,
    
  ],
  imports: [
    CommonModule,
    managmentRoutingModule,
    UtilitiesModule,
    ThemeModule.forRoot(),
  ]
})
export class ManagmentModule { }
