import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from './guards/auth.guard';
import { privilegesGuard } from './guards/privileges.guard';

const routes: Routes = [
  { path: '', pathMatch: "full", canActivate: [AuthGuard], redirectTo: 'pages' },
  { path: 'pages', canActivate: [AuthGuard], data: ['pages'], loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: 'auth', loadChildren: 'app/Auth/Auth.module#AuthModule' },
  { path: 'clinics', canActivate: [AuthGuard], data: ['clinics'], loadChildren: 'app/pages/clinics/clinics.module#ClinicsModule' },
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
