import { Component } from '@angular/core';
import { Inventory } from '../Inventory';
import { Route, Router } from '@angular/router';
import { InventoryService } from '../inventory.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrl: './new-entry.component.css'
})
export class NewEntryComponent {

  myForm: FormGroup;
  inventory: Inventory = new Inventory();

  constructor(private formBuilder: FormBuilder, private router: Router, private inventoryService: InventoryService) {
    this.myForm = this.formBuilder.group(
      {
        carId: 0,
        quantity: 0
      }
    );
  }

  addEntry(): void {
    const formData = this.myForm.value;
    // console.log(this.myForm.value);
    this.inventoryService.addElement(formData).subscribe(() => {
      this.router.navigate(['/success']);
    })
  }
}
