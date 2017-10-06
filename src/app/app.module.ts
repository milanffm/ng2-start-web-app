import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';

import {LageModule} from './lage/lage.module';
import {AusstattungModule} from './ausstattung/ausstattung.module';
import {FinanzierungModule} from './finanzierung/finanzierung.module';
import {KontaktModule} from './kontakt/kontakt.module';
import {ObjektModule} from './objekt/objekt.module';
import {WohnungenModule} from './wohnungen/wohnungen.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot(),
        NgbModule.forRoot(),
        CoreModule,
        SharedModule,
        HomeModule,
        LageModule,
        AusstattungModule,
        FinanzierungModule,
        KontaktModule,
        ObjektModule,
        WohnungenModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
