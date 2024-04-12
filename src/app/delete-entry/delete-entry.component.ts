import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-delete-entry',
  templateUrl: './delete-entry.component.html',
  styleUrl: './delete-entry.component.css'
})
export class DeleteEntryComponent {

  inventoryID!: number;

  constructor(private router: Router, private inventoryService: InventoryService) { }

  onSubmit(): void {
    this.inventoryService.deleteInventory(this.inventoryID).subscribe(() => {
      this.router.navigate(['/success']);
    })
  }

}
