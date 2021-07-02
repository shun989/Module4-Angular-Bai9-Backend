import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        "id": 1,
        "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": 'nai su'
      },
      {
        "id": 2,
        "name": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": 'nai su'
      },
      {
        "id": 3,
        "name": "Mens Cotton Jacket",
        "price": 55.99,
        "description": 'nai su'
      },
      {
        "id": 4,
        "name": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": 'nai su'
      },
      {
        "id": 5,
        "name": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": 'nai su'
      },
      {
        "id": 6,
        "name": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": 'nai su'
      },
      {
        "id": 7,
        "name": "White Gold Plated Princess",
        "price": 9.99,
        "description": 'nai su'
      },
      {
        "id": 8,
        "name": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "description": 'nai su'
      },
      {
        "id": 9,
        "name": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "description": 'nai su'
      },
      {
        "id": 10,
        "name": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "description": 'nai su'
      },
    ];
    return {products};
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
  }

}
