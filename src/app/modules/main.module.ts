import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main.routing.module';
import { MainComponent } from './main/main.component';
import { UtilitiesModule } from '../utilties/utilities.module';
import { ThemeModule } from '../@theme/theme.module';
import { PagesModule } from '../pages/pages.module';
import { AccordionComponent, AccordionModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [MainComponent],
  imports: [
    SharedModule,
    UtilitiesModule,
    ThemeModule,
    MainRoutingModule,
    PagesModule,
    AccordionModule
  ]
})
export class MainModule { }
