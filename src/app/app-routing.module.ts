import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from './guards/auth.guard';
import { privilegesGuard } from './guards/privileges.guard';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { } from "./modules/main.module"
const routes: Routes = [
  //{ path: '', pathMatch: "full", canActivate: [AuthGuard], redirectTo: 'pages' },

  { path: 'pages', canActivate: [AuthGuard], data: ['pages'], loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: './modules/main.module#MainModule'
  },
  {
    path: 'auth', children: [
      {
        path: "signin",
        component: SignInComponent
      },
      {
        path: "signup",
        component: SignUpComponent
      }
    ]
  },
  // {
  //   path: 'clinics',
  //   canActivate: [AuthGuard],
  //   data: ['clinics'],
  //   loadChildren: 'app/pages/clinics/clinics.module#ClinicsModule'
  // },
  {
    path: "clinics/editClinic/:id",
    // canActivate: [privilegesGuard],
    // data: ['editClinic'],
    loadChildren: './pages/clinics/clinics/clinic/clinic.module#ClinicModule'
  },
  { path: '**', redirectTo: "pages" }
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
