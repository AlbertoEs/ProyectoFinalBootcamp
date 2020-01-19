import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { TraductorPipe } from './Pipes/traductor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TraductorPipe
  ],
  imports: [
    BrowserModule,
    SimplebarAngularModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
