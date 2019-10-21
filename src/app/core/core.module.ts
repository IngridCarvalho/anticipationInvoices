import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ShowIfAnalystDirectiveModule } from '../shared/directives/show-if-analyst/show-if-analyst.module';
import { ShowIfManagerDirectiveModule } from '../shared/directives/show-if-manager/show-if-manager.module';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ShowIfAnalystDirectiveModule,
        ShowIfManagerDirectiveModule
    ],
    exports: [
        HeaderComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class CoreModule{}