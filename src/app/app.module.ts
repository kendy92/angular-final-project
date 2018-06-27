import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { CarsComponent } from './cars/cars.component';
import { CarInfoComponent } from './car-info/car-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    HomeComponent,
    ClientInfoComponent,
    CarsComponent,
    CarInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class AppModule { }
