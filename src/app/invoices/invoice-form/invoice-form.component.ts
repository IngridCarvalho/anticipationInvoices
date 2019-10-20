import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Invoice } from '../invoice/invoice';

@Component({
    templateUrl: './invoice-form.component.html'
})
export class InvoiceFormComponent implements OnInit{
    
    invoiceForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
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

            // call function for service
        }
    }

}