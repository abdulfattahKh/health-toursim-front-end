import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClinicComponent } from './clinic.component';
const routes: Routes = [
    {
        path: '',
        component: ClinicComponent,
        // data: ['clinics'],
        // canActivate: [privilegesGuard],
        children: [
            {
                path: "",
                // canActivateChild: [privilegesGuard],
                // data: ['clinics'],
                children: [
                ]
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
