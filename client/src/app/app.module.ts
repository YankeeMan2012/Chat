import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';
// import { MockBackend } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {AuthGuard} from './_guards/index';
import {AuthenticationService, UserService} from './_services/index';
import {LoginComponent} from './login/index';
import {ChatComponent} from './chat/index';
import {RegistrationComponent} from './registration/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        ChatComponent,
        LoginComponent,
        RegistrationComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        // fakeBackendProvider,
        // MockBackend,
        // BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
