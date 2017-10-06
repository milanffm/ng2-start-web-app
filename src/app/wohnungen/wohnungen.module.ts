import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {WohnungenRoutingModule} from './wohnungen-routing.module';
import {WohnungenComponent} from './wohnungen.component';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        WohnungenRoutingModule
    ],
    declarations: [
        WohnungenComponent
    ]
})
export class WohnungenModule {
}
