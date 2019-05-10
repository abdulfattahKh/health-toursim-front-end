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
@NgModule({
  declarations: [MySelectComponent],
  imports: [
    CommonModule,
    HttpModule,
    NbCardModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    NbCardModule,
    BsDatepickerModule,
    MySelectComponent,
    NgSelectModule
  ]
})
export class UtilitiesModule {}
