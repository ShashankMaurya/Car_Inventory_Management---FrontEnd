import { Component, OnInit } from '@angular/core';
import { Inventory } from '../Inventory';
import { Router } from '@angular/router';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrl: './update-entry.component.css'
})
export class UpdateEntryComponent implements OnInit {

  inventory: Inventory = new Inventory();

  constructor(private router: Router, private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.setInventoryData();
  }

  setInventoryData(): void {
    setTimeout(() => {
      this.inventory = this.inventoryService.getInventoryObject();
      // console.log(this.inventory);
    }, 2000);
    
  }

  updateInventory(): void{
    this.inventoryService.updateInventory(this.inventory.id, this.inventory).subscribe(()=>{
      this.router.navigate(['/success'])
    });
  }

}
