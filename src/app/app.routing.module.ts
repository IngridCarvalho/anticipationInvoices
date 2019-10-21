import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { InvoiceFormComponent } from './invoices/invoice-form/invoice-form.component';
import { InvoicesAnticipationComponent } from './invoices/invoices-anticipation/invoices-anticipation.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginGuard } from './core/auth/login.guard';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: HomePageComponent
            },
            {
                path: 'list-invoices',
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