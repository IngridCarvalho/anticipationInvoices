import { Component, OnInit } from '@angular/core';

import { Invoice } from '../invoice/invoice';
import { InvoiceService } from '../invoice/invoice.service';

@Component({
    templateUrl: './invoice-list.component.html'
})
export class InvoiceListComponent implements OnInit{

    invoices: Invoice[] = [];
    newDate: Date;
    invoice: Invoice;

    constructor(
        private invoiceService: InvoiceService
    ){}

    ngOnInit(): void {
        this.listInvoices();
    }

    search(number){
        if(!number){
            this.listInvoices();
        }else{
            this.invoiceService.findByNumber(number)
                .subscribe(invoices => this.invoices = invoices);
        }
    }

    listInvoices(){
        this.invoiceService.listInvoices()
            .subscribe(invoices => this.invoices = invoices);
    }

    invoiceSelected(invoice){
        this.invoice = invoice;
    }

    anticipation(){
        const data = {
            paymentDate: this.newDate,
            status: 'Solicitado Antecipação'
        }
        this.invoiceService.updateInvoice(this.invoice._id, data)
            .subscribe(
                () => this.listInvoices(),
                err => console.log(err)
            );
    }


}