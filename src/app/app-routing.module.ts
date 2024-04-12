import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { UpdateEntryComponent } from './update-entry/update-entry.component';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';
import { ListInventoryComponent } from './list-inventory/list-inventory.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: 'newEntry', component: NewEntryComponent },
  { path: 'updateEntry', component: UpdateEntryComponent },
  { path: 'deleteEntry', component: DeleteEntryComponent },
  { path: 'listInventory', component: ListInventoryComponent },
  { path: 'success', component: SuccessComponent }
  // { path: '', pathMatch: 'full', redirectTo: 'listInventory' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
