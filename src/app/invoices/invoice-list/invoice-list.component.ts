import { Component } from '@angular/core';

@Component({
    templateUrl: './invoice-list.component.html'
})
export class InvoiceListComponent{

    numberSearch: number;

    search(){
        console.log('teste');
    }

}