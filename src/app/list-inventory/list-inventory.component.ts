import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Inventory } from '../Inventory';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrl: './list-inventory.component.css'
})
export class ListInventoryComponent implements OnInit {

  inventory!: Inventory[];
  private sub!: Subscription;

  constructor(private inventoryService: InventoryService, private router: Router) { }

  ngOnInit(): void {
    this.fetchAllInventryData();
  }

  ngOnDestroy(): void {
    // Unsubscribe from the observable to prevent memory leaks
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  fetchAllInventryData() {
    this.sub = this.inventoryService.getAll().subscribe(
      inventory => {
        this.inventory = inventory.filter(i => true);
      }
    );
  }

}
