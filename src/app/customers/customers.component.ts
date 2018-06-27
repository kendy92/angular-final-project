import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customers: Customer[] = []; //* init empty customer array class
  public searchId: number = null;//* init search id property

  //* function to return all customers from service
  getCustomers() {
    this.customerService.getCustomers().subscribe(data => this.customers = data);
  }
  //* function to return customer based on ID from service
  getCustomerById() {
    this.customerService.getCustomerById(this.searchId).subscribe(data => this.customers = data);
  }

  onSearch() {
    this.searchId === null ? this.getCustomers() : this.getCustomerById();
  }

  constructor(
    private customerService: CustomersService
  ) { }

  ngOnInit() {
    this.getCustomers();
  }

}
