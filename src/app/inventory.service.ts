import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from './Inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private api_url = "http://localhost:8080/api/inventory"
  private inventory: Inventory = new Inventory();

  constructor(private http: HttpClient) { }

  getAll(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(`${this.api_url}/getAll`);
  }

  addElement(inventory: Inventory): Observable<Inventory> {
    return this.http.post<Inventory>(`${this.api_url}/add`, inventory);
  }

  setInventoryObject(inv: Inventory): void {
    this.inventory = inv;
  }

  getInventoryObject(): Inventory {
    return this.inventory;
  }

  updateInventory(id: number, i: Inventory): Observable<Inventory> {
    return this.http.put<Inventory>(`${this.api_url}/update/${id}`, i);
  }

  deleteInventory(id: number): Observable<Inventory> {
    return this.http.delete<Inventory>(`${this.api_url}/remove/${id}`);
  }

}
