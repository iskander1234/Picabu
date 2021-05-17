import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {AddNewsComponent} from './addnews/addnews.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContentComponent} from './content/content.component';
import {LoginComponent} from './ authentication/login.component';
import {HotterComponent} from './hotter/hotter.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.route';
import {WelcomeComponent} from './welcome/welcome.component';
import {CommunitiesComponent} from './communities/communities.component';

import { ServiceComponent } from './search/service/service.component';
import {NewServiceService} from './search/new-service.service/new-services.services';
import {TheBestComponent} from './ theBest/the-best.component';
import {MyModuleModule} from './moduls/my-module/my-module.module';
import { FreshComponent } from './fresh/fresh.component';

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
    ServiceComponent,
    TheBestComponent,
    FreshComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true}),
    ReactiveFormsModule,
    MyModuleModule
  ],
  bootstrap: [AppComponent],
  providers: [NewServiceService]
})
export class AppModule { }
