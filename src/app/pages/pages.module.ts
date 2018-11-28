import { NgModule } from "@angular/core";
import { PAGES_ROUTES } from "./pages.routes";

import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { IncrementadorComponent } from "../component/incrementador/incrementador.component";
import { ChartsModule } from 'ng2-charts';
import { GraficadonaComponent } from "../component/graficadona/graficadona.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { PipesModule } from '../pipes/pipes.module';








@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficadonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent
       
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
     imports: [
         CommonModule,
         SharedModule,
         PAGES_ROUTES,
         FormsModule,
         ChartsModule,
         PipesModule
        
    ],
})

export class PagesModule { }