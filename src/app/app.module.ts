import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './PAGES/home/home.component'
import { CheckoutComponent } from './PAGES/checkout/checkout.component'
import { LoginComponent } from './PAGES/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BannerComponent, 
    CheckoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
