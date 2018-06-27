import { Component, OnInit } from '@angular/core';
import { Car } from '../cars/car';
import { CarsService } from '../cars/cars.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {

  num: number;
  cars: Car[] = [];

  getNum(): void {
    this.num = +this.route.snapshot.paramMap.get('id');
    console.log(this.num);
  }

  getCustomerDetails() {
    this.carService.getCarByKey(this.num).subscribe(data => this.cars = data);
  }

  goBack(): void {
    this.location.back();
  }


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private carService: CarsService
  ) { }

  ngOnInit() {
    this.getNum();
    this.getCustomerDetails();
  }

}
