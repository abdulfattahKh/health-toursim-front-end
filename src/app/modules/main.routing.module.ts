import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainComponent } from './main/main.component';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'management',
        canActivate: [AuthGuard],
        data: ['management'],
        loadChildren: '../pages/managment/managment.module#ManagmentModule'
      },
      {
        path: 'clinics',
        canActivate: [AuthGuard],
        data: ['clinics'],
        loadChildren: 'app/pages/clinics/clinics.module#ClinicsModule'
      },
    ]
  }
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
