import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private route: Router) { }

  addProduct(data: Product){
    // console.warn("product service called");
    console.warn(data);
    
    return this.http.post('http://127.0.0.1:8000/add_Product',data);
    
  }


  getProducts(){

    return this.http.get<Product[]>('http://127.0.0.1:8000/products');
  }


  deleteProducts(id: number){
    console.warn(id);
    
    return this.http.delete(`http://127.0.0.1:8000/products/${id}`);
  }


  getProduct(id: string){
    return this.http.get<Product>(`http://127.0.0.1:8000/products/${id}`);
  }
}
