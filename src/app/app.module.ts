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
import {PostsModule} from './posts/posts.module';

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
        PostsModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
