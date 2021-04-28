import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import {CommunitiesComponent} from './communities/communities.component';

import { ServiceComponent } from './search/service/service.component';
import {NewServiceServiceComponent} from './search/new-service.service/new-service.service.component';
import {NewServiceService} from './search/new-service.service/new-services.services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddNewsComponent,
    ContentComponent,
    LoginComponent,
    HotterComponent,
    WelcomeComponent,
    CommunitiesComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
