import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from './guards/auth.guard';
import { privilegesGuard } from './guards/privileges.guard';
const routes: Routes = [
  { path: "pages", canActivate: [AuthGuard], loadChildren: "app/pages/pages.module#PagesModule" },
  { path: "auth", loadChildren: "app/Auth/Auth.module#AuthModule" },
  { path: "", redirectTo: "pages/dashboard", pathMatch: "full" },
  { path: "**", redirectTo: "pages/dashboard" }
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
