import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { InvoiceFormComponent } from './invoices/invoice-form/invoice-form.component';
import { InvoicesAnticipationComponent } from './invoices/invoices-anticipation/invoices-anticipation.component';

const routes: Routes = [
    {
        path: '',
        component: InvoiceListComponent
    },
    {
        path: 'add-invoice',
        component: InvoiceFormComponent
    },
    {
        path: 'anticipations',
        component: InvoicesAnticipationComponent
    }

]

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }