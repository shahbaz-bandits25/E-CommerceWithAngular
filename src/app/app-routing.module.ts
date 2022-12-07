import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SellerAuthComponent} from './seller-auth/seller-auth.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'seler-auth',
    component:  SellerAuthComponent
  },
  {
    path:'seler-home',
    component:  SellerHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'seler-add-product',
    component:  SellerAddProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'seler-update-product/:id',
    component:  SellerUpdateProductComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
