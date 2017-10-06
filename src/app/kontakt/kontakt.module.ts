import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {KontaktRoutingModule} from './kontakt-routing.module';
import {KontaktComponent} from './kontakt.component';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        KontaktRoutingModule
    ],
    declarations: [
        KontaktComponent
    ]
})
export class KontaktModule {
}
