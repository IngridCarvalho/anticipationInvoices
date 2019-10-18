import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';

const routes: Routes = [
    {
        path: '',
        component: InvoiceListComponent
    }
]

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }