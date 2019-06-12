import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClinicsComponent } from './clinics/clinics.component';
import { privilegesGuard } from '../../guards/privileges.guard';
import { ClinicsTableComponent } from './clinics-table/clinics-table.component';
import { AddClinicComponent } from './clinics/add-clinic/add-clinic.component';

const routes: Routes = [
  {
    path: '',
    component: ClinicsComponent,
    // data: ['clinics'],
    // canActivate: [privilegesGuard],
    children: [
      {
        path: "",
        // canActivateChild: [privilegesGuard],
        // data: ['clinics'],
        children: [
          {
            path: "allClinics",
            // canActivate: [privilegesGuard],
            // data: ['allClinics'],
            component: ClinicsTableComponent
          },
          {
            path: "ClinicsByStatus",
            // canActivate: [privilegesGuard],
            // data: ['clinicsApplications'],
            component: ClinicsTableComponent
          },
          {
            path: "myClinics",
            // canActivate: [privilegesGuard],
            // data: ['myClinics'],
            component: ClinicsTableComponent
          },
          {
            path:"addClinic",
            // canActivate: [privilegesGuard],
            // data: ['addClinic'],
            component:AddClinicComponent
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClincisRoutingModule {
}
