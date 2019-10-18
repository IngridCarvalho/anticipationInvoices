import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent{

	@Input() search : string = '';
  @Input() searchPlaceholder: string = '';
  @Output() btnSearch: EventEmitter<any> = new EventEmitter();


}