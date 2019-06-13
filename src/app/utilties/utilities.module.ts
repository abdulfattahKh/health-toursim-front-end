import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NbCardModule, NbDatepickerModule, NbDialogModule, NbSpinnerModule, NbLayoutModule } from "@nebular/theme";
import { MySelectComponent } from "./my-select/my-select.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { TranslateModule } from '@ngx-translate/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MySmartTableComponent } from './my-smart-table/my-smart-table.component';
import { FormCreatorComponent } from './form-creator/form-creator.component';
import { ModalModule } from 'ngx-bootstrap/modal';
const EXPORT_MODULES = [CommonModule,
  HttpModule,
  ReactiveFormsModule,
  FormsModule,
  HttpModule,
  NbCardModule,
  BsDatepickerModule,
  MySelectComponent,
  NgSelectModule,
  TranslateModule,
  Ng2SmartTableModule,
  MySmartTableComponent,
  FormCreatorComponent,
  NbDialogModule,
  ModalModule,
  NbSpinnerModule
]

const IMPORT_MODULES = [CommonModule,
  HttpModule,
  NbCardModule,
  NgSelectModule,
  FormsModule,
  ReactiveFormsModule,
  Ng2SmartTableModule,
  BsDatepickerModule,
  TranslateModule,
  NbSpinnerModule,
  ModalModule.forRoot(),
  NbDialogModule.forChild()
]
@NgModule({
  declarations: [MySelectComponent, MySmartTableComponent, FormCreatorComponent],
  imports: [
    ...IMPORT_MODULES
  ],
  exports: [
    ...EXPORT_MODULES
  ]
})
export class UtilitiesModule { }
