import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { AdvertiseComponent } from './components/advertise/advertise.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { BrandsComponent } from './components/brands/brands.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'drivers', component: DriversComponent},
  { path: 'brands', component: BrandsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
