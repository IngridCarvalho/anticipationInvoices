import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-panel',
    templateUrl: 'panel-notifications.component.html',
    styleUrls: ['./panel-notifications.component.css']
})
export class PanelNotifications{
    
    @Input() title: string = '';
    @Input() labelOne: string = '';
    @Input() labelTwo: string = '';
    @Input() labelThree: string = '';
    @Input() labelFour: string = '';
    @Input() valueOne: string = '';
    @Input() valueTwo: string = '';
    @Input() valueThree: string = '';
    @Input() valueFour: string = '';
}