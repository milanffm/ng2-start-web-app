import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {ObjektRoutingModule} from './objekt-routing.module';
import {ObjektComponent} from './objekt.component';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        ObjektRoutingModule
    ],
    declarations: [
        ObjektComponent
    ]
})
export class ObjektModule {
}
