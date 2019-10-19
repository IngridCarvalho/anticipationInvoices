import { Component } from '@angular/core';

@Component({
    templateUrl: './invoice-list.component.html'
})
export class InvoiceListComponent{

    search(number){
        // fazer a pesquisa, já pega o valor digitado
        console.log(number);
    }

}