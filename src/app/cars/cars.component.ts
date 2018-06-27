import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';
import { Car } from './car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  public cars: Car[] = []; 
  public key: number = null; 

  getAllCars() {
    this.carService.getCars().subscribe(data => this.cars = data);
  }

  getCarByKey() {
    this.carService.getCarByKey(this.key).subscribe(data => this.cars = data);
  }

  onSearch() {
    if(this.key === null) {
      this.getAllCars();
    }else{
      this.getCarByKey();
    }
  }

  constructor(
    private carService: CarsService
  ) { }

  ngOnInit() {
    this.getAllCars();
  }

}
