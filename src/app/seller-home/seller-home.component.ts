import { Component } from '@angular/core';
import { Product } from '../data-types';
import { ProductService } from '../services/product.service';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  productsList:undefined | Product[];
  productDeleteMessage:undefined | string;
  icon = faTrash;
  editIcon= faEdit;
  constructor(private product: ProductService) {}

  ngOnInit():void{

    this.productDisplay();
  }


  deleteProduct(id:number){
    // console.warn(id);
    this.product.deleteProducts(id).subscribe((result) =>{
      if(result)
      {
        this.productDeleteMessage = "Product Deleted!!";
        this.productDisplay();
      }
    });
    setTimeout(() => {
      this.productDeleteMessage = undefined;
    }, 3000);
    
  }

  productDisplay()
  {
    this.product.getProducts().subscribe((result) =>{
      console.warn(result);
      this.productsList = result;
      
    })
  }

}
