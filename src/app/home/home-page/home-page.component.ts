import { Component, OnInit } from '@angular/core';

import { InvoiceService } from '../../invoices/invoice/invoice.service';
import { UserService } from '../../core/user/user.service';

@Component({
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    pending: number = 0;
    disapprove: number = 0;
    approve: number = 0;
    onRequest: number = 0;

    constructor(
        private invoiceService: InvoiceService,
        private userService: UserService
    ){}

    ngOnInit(): void {
        this.countStatus();
    }

    countStatus(){
        this.invoiceService.listInvoices()
            .subscribe(invoices => {
                invoices.forEach(invoice => {
                    switch (invoice.status) {
                        case 'Pendente':
                            this.pending++
                            break;
                        case 'Solicitado Antecipação':
                            this.onRequest++
                            break;
                        case 'Aprovado':
                            this.approve++
                            break;
                        case 'Reprovado':
                            this.disapprove++
                            break;
                    }
                })
            })
    }
}