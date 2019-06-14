import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClinicComponent } from './clinic/clinic.component';
import { ProfileComponent } from './profile/profile.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { StuffComponent } from './stuff/stuff.component';
import { ReviewsComponent } from './reviews/reviews.component';
const routes: Routes = [
    {
        path: '',
        component: ClinicComponent,
        data: ['clinics'],
        // canActivate: [privilegesGuard],
        children: [
            {
                path: "inbox",
                // canActivateChild: [privilegesGuard],
                // data: ['clinics'],
            },
            {
                path:"profile",
                component:ProfileComponent
            },
            {
                path:"treatments",
                component:TreatmentsComponent
            },
            {
                path:"stuff",
                component:StuffComponent
            },
            {
                path:"reviews",
                component:ReviewsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClinicRoutingModule {
}
