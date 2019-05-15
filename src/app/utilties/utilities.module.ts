import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NbCardModule, NbDatepickerModule } from "@nebular/theme";
import { MySelectComponent } from "./my-select/my-select.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { TranslateModule } from '@ngx-translate/core';

const EXPORT_MODULES = [CommonModule,
  HttpModule,
  ReactiveFormsModule,
  FormsModule,
  HttpModule,
  NbCardModule,
  BsDatepickerModule,
  MySelectComponent,
  NgSelectModule,
  TranslateModule]

const IMPORT_MODULES = [CommonModule,
  HttpModule,
  NbCardModule,
  NgSelectModule,
  FormsModule,
  ReactiveFormsModule]
@NgModule({
  declarations: [MySelectComponent],
  imports: [
    ...IMPORT_MODULES
  ],
  exports: [
    ...EXPORT_MODULES
  ]
})
export class UtilitiesModule { }
