import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html'
})

export class ModalComponent{

    @Input() titleModal = '';
    @Input() idModal = '';
    @Input() btnText = '';
    @Output() btnConfirm: EventEmitter<any> = new EventEmitter();
}   
