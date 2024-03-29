import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ManagmentModule } from './managment/managment.module';
import { SharedModule } from '../shared/shared.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ManagmentModule,
    DashboardModule,
    MiscellaneousModule,
    ThemeModule.forRoot()
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  providers: [
  ]
})
export class PagesModule {
}
