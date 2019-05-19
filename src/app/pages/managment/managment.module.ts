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

const Components = [
]

@NgModule({
  declarations: [
    managmentComponent,
    RolesComponent,
    RolesTableComponent,
    CreateRoleComponent,
    EditRoleComponent
  ],
  imports: [
    CommonModule,
    managmentRoutingModule,
    UtilitiesModule,
    ThemeModule.forRoot(),
  ]
})
export class ManagmentModule { }
