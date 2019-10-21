import { Directive, Input, OnInit, Renderer, ElementRef } from "@angular/core";

import { User } from '../../../core/user/user';
import { UserService } from '../../../core/user/user.service';

@Directive({
    selector: '[showIfAnalyst]'
})

export class ShowIfAnalystDirective implements OnInit{

    constructor(
        private userService: UserService,
        private renderer: Renderer,
        private element: ElementRef<any>
    ){

    }

    ngOnInit(): void {
        if(this.userService.user && this.userService.user.profile != "analista"){
            this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
        }
    }
}