import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../data-types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  productData: undefined | Product;
  constructor(private route:ActivatedRoute, private product: ProductService) { }

  ngOnInit():void{

    let productID = this.route.snapshot.paramMap.get('id');
    // console.warn(productID);
    
    productID &&this.product.getProduct(productID).subscribe((data) =>{
    console.warn(data);
    this.productData = data;
      
    });
  }
  updateProductFunction(data:any)
  {
    console.warn("hello from update product");
    // let productID = this.route.snapshot.paramMap.get('id');
    // // console.warn(productID);
    
    // productID &&this.product.getProduct(productID).subscribe((data) =>{
    // console.warn(data);
      
    // });
    
  }
}
