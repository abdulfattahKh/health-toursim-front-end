import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';
import { privilegesGuard } from '../guards/privileges.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  // canActivate: [AuthGuard],
  //data: ['dashboard'],
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'management',
      loadChildren: "./managment/managment.module#ManagmentModule"
    }
    ,
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: 'dashboard'
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
