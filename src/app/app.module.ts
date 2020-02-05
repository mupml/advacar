import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { AdvertiseComponent } from './components/advertise/advertise.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { BrandsComponent } from './components/brands/brands.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VehicleComponent,
    AdvertiseComponent,
    AboutComponent,
    HomeComponent,
    DriversComponent,
    BrandsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
