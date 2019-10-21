import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { SearchModule } from '../shared/components/search/search.module';
import { ModalModule } from '../shared/components/modal/modal.module';
import { TitleModule } from '../shared/components/title/title.module';
import { ErrorMessageModule } from '../shared/components/error-message/error-message.module';
import { InvoicesAnticipationComponent } from './invoices-anticipation/invoices-anticipation.component';

@NgModule({
    declarations: [
        InvoiceListComponent,
        InvoiceFormComponent,
        InvoicesAnticipationComponent
    ],
    imports: [
        CommonModule,
        SearchModule,
        ModalModule,
        TitleModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ErrorMessageModule
    ]
})
export class InvoicesModule{}