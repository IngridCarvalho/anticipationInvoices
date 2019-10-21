import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Invoice } from './invoice';

const API = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class InvoiceService{

    constructor(private http: HttpClient){}

    listInvoices(){
        return this.http.get<Invoice[]>(API + 'invoice');
    }

    addInvoice(newInvoice){
        return this.http.post(API + 'invoice', newInvoice);
    }

    findByNumber(number){
        return this.http.get<Invoice[]>(API + 'invoice/search/' + number);
    }

}