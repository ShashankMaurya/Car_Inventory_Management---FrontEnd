import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarServiceService } from '../car-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrl: './list-cars.component.css'
})
export class ListCarsComponent implements OnInit {

  cars!: Car[];

  constructor(private carService: CarServiceService, private router: Router) { }

  ngOnInit(): void {
    this.fetchAllCars();
  }

  fetchAllCars(){
    this.carService.getAll().subscribe(
      car =>{
        this.cars = car.filter(c => true);
      }
    );
  }
}
