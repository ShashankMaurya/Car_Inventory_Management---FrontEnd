import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Inventory } from '../Inventory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrl: './list-inventory.component.css'
})
export class ListInventoryComponent implements OnInit {

  inventory!: Inventory[];

  constructor(private inventoryService: InventoryService, private router: Router) { }

  ngOnInit(): void {
    this.fetchAllInventryData();
  }

  fetchAllInventryData() {
    this.inventoryService.getAll().subscribe(
      inventory => {
        this.inventory = inventory.filter(i => true);
      }
    );
  }

}
