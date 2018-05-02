import {Routes, RouterModule} from '@angular/router';
import { PagesComponent } from './pages.component';
import { BashboardComponent } from './bashboard/bashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';




const pagesRoutes: Routes =[
    { 
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: BashboardComponent},
            { path: 'progress', component: ProgressComponent},
            { path: 'graficas1', component: Graficas1Component},
            { path: 'account-settings', component: AccountSettingsComponent},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    }
  
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes, {useHash: true} );