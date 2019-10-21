import { NgModule } from '@angular/core';

import { ShowIfManagerDirective } from './show-if-manager.directive';

@NgModule({
    declarations: [ShowIfManagerDirective],
    exports: [ShowIfManagerDirective]
})
export class ShowIfManagerDirectiveModule{}