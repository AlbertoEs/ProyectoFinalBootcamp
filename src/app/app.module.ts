import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { TraductorPipe } from './Pipes/traductor/traductor.pipe';
import { NavTopComponent } from './Components/Subcomponents/nav-top/nav-top.component';
import { NavBottomComponent } from './Components/Subcomponents/nav-bottom/nav-bottom.component';
import { ConstantsService } from './Providers/constants/constants.service';
import { CookieService } from 'ngx-cookie-service';
import { LanguageCookieService } from './Providers/languageCookie/language-cookie.service';
import { TitleCasePipe } from '@angular/common';
import { ListComponent } from './Components/list/list.component';
import { FilterPipe } from './Pipes/filter/filter.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavTopComponent,
    NavBottomComponent,
    TraductorPipe,
    FilterPipe,
    ListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SimplebarAngularModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClient,
    ConstantsService,
    CookieService,
    LanguageCookieService,
    TitleCasePipe,
    TraductorPipe,
    FilterPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
