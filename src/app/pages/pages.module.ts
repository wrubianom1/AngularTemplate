import { NgModule } from '@angular/core';
import { BashboardComponent } from './bashboard/bashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';



@NgModule({
    declarations: [
        PagesComponent,
        BashboardComponent,
        ProgressComponent,
        Graficas1Component
      ],
      exports: [
        BashboardComponent,
        ProgressComponent,
        Graficas1Component
      ],
      imports: [
        SharedModule,
        PAGES_ROUTES
      ],
})

export class PagesModule { }