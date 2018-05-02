import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { BashboardComponent } from './bashboard/bashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



@NgModule({
    declarations: [
        PagesComponent,
        BashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        AccountSettingsComponent
      ],
      exports: [
        BashboardComponent,
        ProgressComponent,
        Graficas1Component
      ],
      imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
      ],
})

export class PagesModule { }