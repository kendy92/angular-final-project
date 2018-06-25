import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//* import components to route
import { CustomersComponent } from './customers/customers.component';


//* init route array
const routes: Routes = [
  { path: 'customers', component: CustomersComponent }
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
