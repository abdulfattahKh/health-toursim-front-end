
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { managmentComponent } from './managment.component';
import { RolesComponent } from './roles/roles.component';
import { RolesTableComponent } from './roles/roles-table-component/roles-table-component.component';
import { CreateRoleComponent } from './roles/create-role-component/create-role-component.component';
import { EditRoleComponent } from './roles/edit-role-component/edit-role-component.component';

const routes: Routes = [
  {
    path: '',
    component: managmentComponent,
    children: [
      {
        path: "roles",
        component: RolesComponent,
        children: [
          {
            path: "",
            component: RolesTableComponent
          },
          {
            path: "create",
            component: CreateRoleComponent
          },
          {
            path: "edit/:id",
            component: EditRoleComponent
          },
          {
            path:"**",
            redirectTo:""
          }
        ]
      },
    ]
  },

  {
    path: "**",
    redirectTo: ''
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class managmentRoutingModule { }
