import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PanelNotificationsModule } from '../shared/components/panel-notifications/panel-notifications.module';

@NgModule({
    declarations: [
        HomeComponent,
        HomePageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CoreModule,
        PanelNotificationsModule
    ]
})
export class HomeModule{}