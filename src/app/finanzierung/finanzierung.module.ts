import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {FinanzierungRoutingModule} from './finanzierung-routing.module';
import {FinanzierungComponent} from './finanzierung.component';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        FinanzierungRoutingModule
    ],
    declarations: [
        FinanzierungComponent
    ]
})
export class FinanzierungModule {
}
