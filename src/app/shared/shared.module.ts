import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { UtilitiesModule } from '../utilties/utilities.module';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { NbLayoutModule } from '@nebular/theme';
import { TypeaheadModule, AccordionModule, AccordionComponent } from 'ngx-bootstrap';



const EXPORT_MODULES = [CommonModule,
  HttpModule,
  ReactiveFormsModule,
  FormsModule,
  TranslateModule,
  UtilitiesModule,
  RouterModule,
  AgmCoreModule,
  NbLayoutModule,
  UtilitiesModule,
  TypeaheadModule,
  AccordionModule
]

const IMPORT_MODULES = [CommonModule,
  HttpModule,
  ReactiveFormsModule,
  FormsModule,
  TranslateModule,
  UtilitiesModule,
  RouterModule,
  AgmCoreModule,
  NbLayoutModule,
  TypeaheadModule,
  AccordionModule
]


@NgModule({
  declarations: [],
  imports: [
    ...IMPORT_MODULES
  ],
  exports: [
    ...EXPORT_MODULES
  ]
})
export class SharedModule { }
