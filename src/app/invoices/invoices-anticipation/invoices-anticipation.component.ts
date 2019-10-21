import { Component, OnInit } from '@angular/core';

import { InvoiceService } from '../invoice/invoice.service';
import { Anticipation } from '../invoice/anticipation';

@Component({
    templateUrl: './invoices-anticipation.component.html'
})
export class InvoicesAnticipationComponent implements OnInit {

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

    approve(){
        console.log('aprovado');
    }

    disapprove(){
        console.log('desaprovado', this.newDate);
    }
}