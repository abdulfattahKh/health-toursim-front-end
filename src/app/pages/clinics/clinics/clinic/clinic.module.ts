import { NgModule } from '@angular/core';
import { ClinicComponent } from './clinic/clinic.component';
import { ClinicRoutingModule } from './clinic_routing_module';
import { SharedModule } from '../../../../shared/shared.module';
import { ThemeModule } from '../../../../@theme/theme.module';
import { ProfileComponent } from './profile/profile.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { StuffComponent } from './stuff/stuff.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ClinicInformationComponent } from './profile/clinic-information/clinic-information.component';
import { DescriptionComponent } from './profile/description/description.component';
import { ClinicPicturesComponent } from './profile/clinic-pictures/clinic-pictures.component';
import { CurrencyComponent } from './profile/currency/currency.component';
import { FormsModule } from '@angular/forms';
import { UtilitiesModule } from '../../../../utilties/utilities.module';
import { TypeaheadModule, AccordionModule } from 'ngx-bootstrap';
import { ClinicsTreatmentComponent } from './treatments/clinics-treatment/clinics-treatment.component';
import { TreatmentComponent } from './treatments/treatment/treatment.component';
import { PrimaryClinicTypeComponent } from './treatments/primary-clinic-type/primary-clinic-type.component';


@NgModule({
  declarations: [ClinicComponent, ProfileComponent, TreatmentsComponent, StuffComponent, ReviewsComponent, ClinicInformationComponent, DescriptionComponent, ClinicPicturesComponent, CurrencyComponent, ClinicsTreatmentComponent, TreatmentComponent, PrimaryClinicTypeComponent],
  imports: [
    ThemeModule,
    SharedModule,
    UtilitiesModule,
    TypeaheadModule,
    AccordionModule.forRoot(),
    ClinicRoutingModule
  ]
})
export class ClinicModule { }
