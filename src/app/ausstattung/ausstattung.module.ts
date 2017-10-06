import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {AusstattungRoutingModule} from './ausstattung-routing.module';
import {AusstattungComponent} from './ausstattung.component';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        AusstattungRoutingModule
    ],
    declarations: [
        AusstattungComponent
    ]
})
export class AusstattungModule {
}
