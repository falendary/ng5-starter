import {NgModule, APP_BOOTSTRAP_LISTENER, ApplicationRef} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {ServerTransferStateModule} from '../modules/transfer-state/server-transfer-state.module';
import {AppComponent} from './components/app.component';
import {AppModule} from './components/app.module';
import {TransferState} from '../modules/transfer-state/transfer-state';
import {BrowserModule} from '@angular/platform-browser';

require('../assets/scss/style.scss');

@NgModule({
  bootstrap: [AppComponent],
  providers: [
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'xcaliber'
    }),
    ServerModule,
    ServerTransferStateModule,
    AppModule
  ]
})
export class ServerAppModule {

}
