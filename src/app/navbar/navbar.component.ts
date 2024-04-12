import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) { }

  listEntries(): void {
    this.router.navigate(['listInventory']);
  }

  addEntry(): void {
    this.router.navigate(['newEntry']);
  }

  updateEntry(): void {
    this.router.navigate(['enter-update-id']);
  }

  deleteEntry(): void {
    this.router.navigate(['deleteEntry']);
  }

  listCars(): void {
    this.router.navigate(['listCars']);
  }

}
