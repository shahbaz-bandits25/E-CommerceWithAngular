import { Component } from '@angular/core';
import { Product } from '../data-types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  productAddMessage: string|undefined;
  constructor(private product:ProductService) {}

  addProductFunction(data:Product) {
    console.warn(data);
    this.product.addProduct(data).subscribe((result) =>{
      console.warn(result);
      if(result){
        this.productAddMessage="Product Added Successfully!";
      }
      setTimeout(() => this.productAddMessage=undefined,3000);
      
    });
    
  }



}
