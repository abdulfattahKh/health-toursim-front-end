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
import { TypeaheadModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [ClinicComponent, ProfileComponent, TreatmentsComponent, StuffComponent, ReviewsComponent, ClinicInformationComponent, DescriptionComponent, ClinicPicturesComponent, CurrencyComponent],
  imports: [
    ThemeModule,
    SharedModule,
    UtilitiesModule,
    TypeaheadModule,
    ClinicRoutingModule
  ]
})
export class ClinicModule { }
