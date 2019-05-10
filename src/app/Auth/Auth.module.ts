import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SignUpComponent } from "./sign-up/sign-up.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SignInComponent } from "./sign-in/sign-in.component";
import { AuthService } from "./Auth.service";
import { UtilitiesModule } from "../utilties/utilities.module";
import { ThemeModule } from '../@theme/theme.module';

const routes: Routes = [
  {
    path: "signup",
    component: SignUpComponent
  },
  {
    path: "signin",
    component: SignInComponent
  }
];

@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ThemeModule.forRoot(),
    UtilitiesModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AuthModule {
  constructor() { }
}
