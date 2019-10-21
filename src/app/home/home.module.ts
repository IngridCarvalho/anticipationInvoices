import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
    declarations: [
        HomeComponent,
        HomePageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CoreModule
    ]
})
export class HomeModule{}