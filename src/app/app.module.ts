import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MailComponent } from './mail/mail.component';
import { ListmailComponent } from './components/listmail/listmail.component';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    ListmailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
