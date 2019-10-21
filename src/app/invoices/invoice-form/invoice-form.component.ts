import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Invoice } from '../invoice/invoice';
import { InvoiceService } from '../invoice/invoice.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './invoice-form.component.html'
})
export class InvoiceFormComponent implements OnInit{
    
    invoiceForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private invoiceService: InvoiceService,
        private router: Router
    ){}
    
    ngOnInit(): void {
        this.invoiceForm = this.formBuilder.group({
            number: ['', Validators.required],
            description: ['',
                [
                    Validators.required,
                    Validators.maxLength(80)
                ]
            ],
            billingDate: ['', Validators.required],
            paymentDate: ['', Validators.required],
            status: ['', Validators.required]
        })
    }

    saveInvoice(){
        if(!this.invoiceForm.pending && this.invoiceForm.valid){
            const newInvoice = this.invoiceForm.getRawValue() as Invoice;

            this.invoiceService.addInvoice(newInvoice)
                .subscribe(
                    () => this.router.navigate(['']),
                    err => console.log(err)
                )
        }
    }

}