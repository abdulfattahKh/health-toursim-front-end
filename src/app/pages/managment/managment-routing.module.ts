
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { managmentComponent } from './managment.component';
import { RolesComponent } from './roles/roles.component';
import { RolesTableComponent } from './roles/roles-table-component/roles-table-component.component';
import { CreateRoleComponent } from './roles/create-role-component/create-role-component.component';
import { EditRoleComponent } from './roles/edit-role-component/edit-role-component.component';
import { UsersComponent } from './users/users.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { PrivilegesTableComponent } from './privileges/privileges-table/privileges-table.component';
import { PrivilegesFormComponent } from './privileges/privileges-form/privileges-form.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { privilegesGuard } from '../../guards/privileges.guard';

const routes: Routes = [
  {
    path: '',
    component: managmentComponent,
    data: ['management'],
    canActivate: [privilegesGuard],
    children: [
      {
        path: '',
        canActivateChild: [privilegesGuard],
        data: ['management'],
        children: [
          {
            path: "roles",
            component: RolesComponent,
            data: ['roles'],
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
                path: "**",
                redirectTo: ""
              }
            ]
          },
          {
            path: "users",
            component: UsersComponent,
            data: ['users'],
            children: [
              {
                path: "",
                component: UsersTableComponent
              },
              {
                path: "create",
                component: UsersFormComponent
              },
              {
                path: "edit/:id",
                component: UsersFormComponent
              },
              {
                path: "**",
                redirectTo: ""
              }
            ]
          },
          {
            path: "privileges",
            component: PrivilegesComponent,
            canActivate: [privilegesGuard],
            data: ['privileges'],
            children: [
              {
                path: "",
                canActivateChild: [privilegesGuard],
                data: ['privileges'],
                children: [
                  {
                    path: "",
                    component: PrivilegesTableComponent
                  },
                  {
                    path: "create",
                    component: PrivilegesFormComponent
                  },
                  {
                    path: "edit/:id",
                    component: PrivilegesFormComponent
                  },
                  {
                    path: "**",
                    redirectTo: ""
                  }
                ]
              },
            ]
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
