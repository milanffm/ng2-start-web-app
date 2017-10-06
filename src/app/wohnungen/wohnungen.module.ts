import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {AccordionModule} from 'primeng/components/accordion/accordion';

import {WohnungenRoutingModule} from './wohnungen-routing.module';
import {WohnungenComponent} from './wohnungen.component';



@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        WohnungenRoutingModule,
        AccordionModule
    ],
    declarations: [
        WohnungenComponent
    ]
})
export class WohnungenModule {
}
