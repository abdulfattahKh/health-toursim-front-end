import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicsComponent } from './clinics/clinics.component';
import { ClinicsTableComponent } from './clinics-table/clinics-table.component';
import { SharedModule } from '../../shared/shared.module';
import { ClincisRoutingModule } from './clinics-routing-module';
import { ThemeModule } from '../../@theme/theme.module';
import { AddClinicComponent } from './clinics/add-clinic/add-clinic.component';
import { EditClinicComponent } from './clinics/edit-clinic/edit-clinic.component';

@NgModule({
  declarations: [ClinicsComponent, ClinicsTableComponent, AddClinicComponent, EditClinicComponent],
  imports: [
    ClincisRoutingModule,
    SharedModule,
    ThemeModule
  ]
})
export class ClinicsModule { }
