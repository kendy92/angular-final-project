import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomersService } from './customers.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customers: Customer[] = []; //* init empty customer array class
  public searchId: number = null;//* init search id property
  public errMsg: string = "";

  //* function to return all customers from service
  getCustomers() {
    this.customerService.getCustomers().subscribe(data => this.customers = data, error => this.errMsg = error);
  }
  //* function to return customer based on ID from service
  getCustomerById() {
    this.customerService.getCustomerById(this.searchId).subscribe(data => this.customers = data, error => this.errMsg = error);
  }

  onSearch() {
    if(this.searchId === null){
      alert('Please key in customer id to search!');
      this.getCustomers();
    }else {
      this.getCustomerById();
    }
  }

  reLoad() {
    window.location.href = "/customers";
  }

  constructor(
    private customerService: CustomersService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCustomers();
  }

}
