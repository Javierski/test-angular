import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MailComponent } from './components/mail/mail.component';
import { ListmailComponent } from './components/listmail/listmail.component';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    ListmailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
