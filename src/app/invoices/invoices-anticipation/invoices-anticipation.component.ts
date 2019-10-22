import { Component, OnInit } from '@angular/core';

import { InvoiceService } from '../invoice/invoice.service';
import { Invoice } from '../invoice/invoice';

@Component({
    templateUrl: './invoices-anticipation.component.html'
})
export class InvoicesAnticipationComponent implements OnInit {

    invoice: Invoice;
    anticipations: Invoice[] = [];
    newDate: Date;

    constructor(
        private invoiceService: InvoiceService
    ){}

    ngOnInit(): void {
        this.listAnticipations();
    }

    listAnticipations(){
        this.invoiceService.listAnticipations()
            .subscribe(anticipations => {this.anticipations = anticipations, console.log(anticipations)});
    }

    invoiceSelected(anticipation){
        this.invoice = anticipation;
    }

    approve(){
        const data = {
            status: 'Aprovado'
        }
        this.invoiceService.updateInvoice(this.invoice._id, data)
            .subscribe(
                () => this.listAnticipations(),
                err => console.log(err)
            );
    }

    disapprove(){
        const data = {
            paymentNewDate: this.newDate,
            status: 'Reprovado'
        }
        this.invoiceService.updateInvoice(this.invoice._id, data)
            .subscribe(
                () => this.listAnticipations(),
                err => console.log(err)
            );
    }
}