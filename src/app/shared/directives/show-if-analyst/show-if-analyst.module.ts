import { NgModule } from '@angular/core';

import { ShowIfAnalystDirective } from './show-if-analyst.directive';

@NgModule({
    declarations: [ShowIfAnalystDirective],
    exports: [ShowIfAnalystDirective]
})
export class ShowIfAnalystDirectiveModule{}