import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { Invoice } from './invoice';

const API = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class InvoiceService{

    constructor(private http: HttpClient){}

    listStudents(){
        return this.http.get<Invoice[]>(API + '/invoice');
    }

    private addInvoice(newInvoice){
        return this.http.post(API + '/invoice', newInvoice).pipe(take(1));
    }

}