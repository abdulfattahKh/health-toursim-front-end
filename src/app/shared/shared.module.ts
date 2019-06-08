import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { UtilitiesModule } from '../utilties/utilities.module';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';



const EXPORT_MODULES = [CommonModule,
  HttpModule,
  ReactiveFormsModule,
  FormsModule,
  TranslateModule,
  UtilitiesModule,
  RouterModule,
  AgmCoreModule
]

const IMPORT_MODULES = [CommonModule,
  HttpModule,
  ReactiveFormsModule,
  FormsModule,
  TranslateModule,
  UtilitiesModule,
  RouterModule,
  AgmCoreModule
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
