import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';

import {KontaktRoutingModule} from './kontakt-routing.module';
import {KontaktComponent} from './kontakt.component';
import { ContactService} from '../core/contact.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        KontaktRoutingModule
    ],
    declarations: [
        KontaktComponent
    ],
    providers: [ ContactService ]
})
export class KontaktModule {
}
