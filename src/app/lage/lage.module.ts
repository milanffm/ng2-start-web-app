import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {LageRoutingModule} from './lage-routing.module';
import {LageComponent} from './lage.component';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        LageRoutingModule
    ],
    declarations: [
        LageComponent
    ]
})
export class LageModule {
}
