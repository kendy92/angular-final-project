import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CustomersService } from '../customers/customers.service';
import { Customer } from '../customers/customer';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  public num: number;
  public customers: Customer[] = [];
  public errMsg: string = "";

  getNum(): void {
    this.num = +this.route.snapshot.paramMap.get('id');
  }

  getCustomerDetails() {
    this.customerService.getCustomerById(this.num).subscribe(data => this.customers = data, error => this.errMsg = error);
  }

  goBack(): void {
    this.location.back();
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private customerService: CustomersService
  ) { }

  ngOnInit() {
    this.getNum();
    this.getCustomerDetails();
  }

}
