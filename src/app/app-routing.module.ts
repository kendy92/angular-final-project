import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//* import components to route
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { CarsComponent } from './cars/cars.component';
import { CarInfoComponent } from './car-info/car-info.component';

//* init route array
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/info/:id', component: ClientInfoComponent},
  { path: 'cars', component: CarsComponent },
  { path: 'cars/info/:id', component: CarInfoComponent}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
})
export class AppRoutingModule { }
