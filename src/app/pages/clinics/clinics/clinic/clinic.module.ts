import { NgModule } from '@angular/core';
import { ClinicComponent } from './clinic/clinic.component';
import { ClinicRoutingModule } from './clinic/clinic_routing_module';
import { SharedModule } from '../../../../shared/shared.module';
import { ThemeModule } from '../../../../@theme/theme.module';

@NgModule({
  declarations: [ClinicComponent],
  imports: [
    ThemeModule,
    SharedModule,
    ClinicRoutingModule
  ]
})
export class ClinicModule { }
