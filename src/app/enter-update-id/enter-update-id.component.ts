import { Component } from '@angular/core';
import { GetIdService } from '../get-id.service';
import { Router } from '@angular/router';
import { Inventory } from '../Inventory';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-enter-update-id',
  templateUrl: './enter-update-id.component.html',
  styleUrl: './enter-update-id.component.css'
})
export class EnterUpdateIDComponent {

  inventoryID!: number;
  inventoryObj: Inventory = new Inventory();

  constructor(private getIdService: GetIdService, private router: Router, private inventoryService: InventoryService) { }

  onSubmit(): void {
    this.getIdService.setInventoryID(this.inventoryID);
    this.router.navigate(['updateEntry']);
    this.getIdService.fetchInventoryData().subscribe(data => {
      this.inventoryObj.id = data.id;
      this.inventoryObj.car_id = data.car_id;
      this.inventoryObj.quantity = data.quantity;
      this.inventoryService.setInventoryObject(this.inventoryObj);
      // console.log(data);
      
    });
  }


}
