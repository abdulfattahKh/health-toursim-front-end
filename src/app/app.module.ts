/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF, DatePipe } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { CoreModule } from "./@core/core.module";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ThemeModule } from "./@theme/theme.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UtilitiesModule } from "./utilties/utilities.module";
import { AuthService } from "./Auth/Auth.service";
import { NbDatepickerModule, NbDialogModule } from "@nebular/theme";
import { AuthModule } from './Auth/Auth.module';
import { AuthGuard } from './guards/auth.guard';
import { privilegesGuard } from './guards/privileges.guard';
import { PrivilegesService } from './services/privileges.service';
import { MainService } from './services/main.service';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NotAuthorizedComponent } from './errors/not-authorized/not-authorized.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslationService } from './services/translation.service';
import { AgmCoreModule } from '@agm/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TypeaheadModule } from 'ngx-bootstrap';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const Module = [BrowserAnimationsModule,
  HttpClientModule,
  AppRoutingModule,

  NgbModule.forRoot(),

  ThemeModule.forRoot(),
  CoreModule.forRoot(),
  ToastrModule.forRoot(), // ToastrModule added
  NbDialogModule.forRoot(),
  TypeaheadModule.forRoot(),
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }),
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyAjkSef3UQo6CdeeLcb9BYSdNM8GNG3bEs'
  }),
  BsDatepickerModule.forRoot(),
  NbDatepickerModule.forRoot(),

  AuthModule,
  UtilitiesModule]

const Services = [
  AuthService, DatePipe, AuthGuard, privilegesGuard, PrivilegesService, MainService, TranslationService
]

@NgModule({
  declarations: [AppComponent, NotFoundComponent, NotAuthorizedComponent],
  imports: [
    ...Module,
    CarouselModule.forRoot()
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }, ...Services],
  bootstrap: [AppComponent],

})
export class AppModule { }
