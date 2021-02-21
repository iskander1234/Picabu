import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {AddNewsComponent} from './addnews/addnews.component';
import {FormsModule} from '@angular/forms';
import {ContentComponent} from './content/content.component';
import {LoginComponent} from './ authentication/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddNewsComponent,
    ContentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
