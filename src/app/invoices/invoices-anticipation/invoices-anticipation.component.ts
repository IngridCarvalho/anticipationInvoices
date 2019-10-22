import { Component, OnInit } from '@angular/core';

import { InvoiceService } from '../invoice/invoice.service';
import { Anticipation } from '../invoice/anticipation';

@Component({
    templateUrl: './invoices-anticipation.component.html'
})
export class InvoicesAnticipationComponent implements OnInit {

    invoiceId: string;
    anticipations: Anticipation[] = [];
    newDate: Date;

    constructor(
        private invoiceService: InvoiceService
    ){}

    ngOnInit(): void {
        this.listAnticipations();
    }

    listAnticipations(){
        this.invoiceService.listAnticipations()
            .subscribe(anticipations => this.anticipations = anticipations);
    }

    invoiceSelected(id){
        this.invoiceId = id;
    }

    approve(){
        const data = {
            status: 'Aprovado'
        }
        this.invoiceService.updateInvoice(this.invoiceId, data)
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
        this.invoiceService.updateInvoice(this.invoiceId, data)
            .subscribe(
                () => this.listAnticipations(),
                err => console.log(err)
            );
    }
}