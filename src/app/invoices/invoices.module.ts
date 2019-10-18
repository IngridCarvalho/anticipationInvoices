import { NgModule } from '@angular/core';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { CommonModule } from '@angular/common';
import { InvoiceForm } from './invoice-form/invoice-form.component';
import { SearchModule } from '../shared/components/search/search.module';

@NgModule({
    declarations: [
        InvoiceListComponent,
        InvoiceForm
    ],
    imports: [
        CommonModule,
        SearchModule
    ]
})
export class InvoicesModule{}