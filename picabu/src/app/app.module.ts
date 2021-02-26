import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {AddNewsComponent} from './addnews/addnews.component';
import {FormsModule} from '@angular/forms';
import {ContentComponent} from './content/content.component';
import {LoginComponent} from './ authentication/login.component';
import {HotterComponent} from './hotter/hotter.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.route';
import {WelcomeComponent} from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddNewsComponent,
    ContentComponent,
    LoginComponent,
    HotterComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
