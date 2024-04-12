import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { UpdateEntryComponent } from './update-entry/update-entry.component';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';
import { ListInventoryComponent } from './list-inventory/list-inventory.component';
import { SuccessComponent } from './success/success.component';
import { EnterUpdateIDComponent } from './enter-update-id/enter-update-id.component';
import { InsertSuccessComponent } from './insert-success/insert-success.component';
import { ListCarsComponent } from './list-cars/list-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewEntryComponent,
    UpdateEntryComponent,
    DeleteEntryComponent,
    ListInventoryComponent,
    SuccessComponent,
    EnterUpdateIDComponent,
    InsertSuccessComponent,
    ListCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
