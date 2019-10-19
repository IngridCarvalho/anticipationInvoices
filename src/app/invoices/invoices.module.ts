import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { SearchModule } from '../shared/components/search/search.module';
import { ModalModule } from '../shared/components/modal/modal.module';
import { TitleModule } from '../shared/components/title/title.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        InvoiceListComponent,
        InvoiceFormComponent
    ],
    imports: [
        CommonModule,
        SearchModule,
        ModalModule,
        TitleModule,
        RouterModule
    ]
})
export class InvoicesModule{}