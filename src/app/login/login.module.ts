import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { CoreModule } from '../core/core.module';
import { ErrorMessageModule } from '../shared/components/error-message/error-message.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        ErrorMessageModule
    ]
})
export class LoginModule{}