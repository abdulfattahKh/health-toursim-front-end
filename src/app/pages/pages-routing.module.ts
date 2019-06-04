import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';
import { privilegesGuard } from '../guards/privileges.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  canActivate: [privilegesGuard],
  data: [1, 2, 3, 72],
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [privilegesGuard],
      data: [1, 2, 3, 72],
    },
    {
      path: 'management',
      loadChildren: "./managment/managment.module#ManagmentModule",
      canActivate: [privilegesGuard],
      data: [1, 2, 3],
    }
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
