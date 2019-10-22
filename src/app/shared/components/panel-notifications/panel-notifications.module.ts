import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelNotifications } from './panel-notifications.component';

@NgModule({
    declarations: [
        PanelNotifications
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PanelNotifications
    ]
})
export class PanelNotificationsModule{}