import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { TraductorPipe } from './Pipes/traductor.pipe';
import { NavTopComponent } from './Components/Subcomponents/nav-top/nav-top.component';
import { NavBottomComponent } from './Components/Subcomponents/nav-bottom/nav-bottom.component';
import { ConstantsService } from './Providers/constants/constants.service';
import { CookieService } from 'ngx-cookie-service';
import { LanguageCookieService } from './Providers/languageCookie/language-cookie.service';
import { TitleCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TraductorPipe,
    NavTopComponent,
    NavBottomComponent
  ],
  imports: [
    BrowserModule,
    SimplebarAngularModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ConstantsService,
    CookieService,
    LanguageCookieService,
    TitleCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
