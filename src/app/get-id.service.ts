import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from './Inventory';

@Injectable({
  providedIn: 'root'
})
export class GetIdService {

  private api_url = "http://localhost:8080/api/inventory";
  private inventoryID!: number;

  constructor(private http: HttpClient) { }

  setInventoryID(inventoryID: number) {
    this.inventoryID = inventoryID;
  }

  getInventoryID() {
    return this.inventoryID;
  }

  fetchInventoryData(): Observable<Inventory> {
    return this.http.get<Inventory>(`${this.api_url}/get/${this.inventoryID}`);
  }
}
