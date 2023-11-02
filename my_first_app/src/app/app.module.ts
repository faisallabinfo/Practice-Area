import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlert } from './warningalert/warninglalert.component';
import { SuccessAlert } from './successalert/successalert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    WarningAlert,
    SuccessAlert
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }