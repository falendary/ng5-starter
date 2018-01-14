import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './components/app.component';
import { AppModule } from './components/app.module';
import { BrowserTransferStateModule } from '../modules/transfer-state/browser-transfer-state.module';

import { PrebootModule } from 'preboot';

require('../assets/scss/style.scss');

@NgModule({
    bootstrap: [AppComponent],
    providers: [],
    imports: [
        BrowserAnimationsModule,
        BrowserModule.withServerTransition({
            appId: 'xcaliber'
        }),
        BrowserTransferStateModule,

        PrebootModule.withConfig({appRoot: 'xcaliber'}),

        AppModule
    ]
})
export class BrowserAppModule {

    constructor() {
    }

}
