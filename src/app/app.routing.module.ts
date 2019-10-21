import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { InvoiceFormComponent } from './invoices/invoice-form/invoice-form.component';
import { InvoicesAnticipationComponent } from './invoices/invoices-anticipation/invoices-anticipation.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'invoices',
    },
    {
        path: 'login',
        component: LoginComponent,
        // canActivate: [LoginGuard]
    },
    {
        path: 'invoices',
        component: InvoicesComponent,
        children: [
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
    }

]

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }