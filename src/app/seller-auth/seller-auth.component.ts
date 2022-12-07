import { Component } from '@angular/core';
import {SellerService} from '../services/seller.service';
import { Router } from '@angular/router';
import {SignUp} from '../data-types';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private seller: SellerService, private route: Router){}
  showLogin = false;
  authError: string = "";
  // ngOnInit():void{
  //   this.seller.reloadSeller();
  // }
  
  signUpFunction(data: SignUp): void{
    
    this.seller.sellerSignUp(data);
  }

  logInFunction(data: SignUp): void{
    // this.authError ='';
    // console.warn(data);
    this.seller.sellerLogin(data);
    this.seller.isLoginFailed.subscribe((err)=>{
      if(err){
        this.authError = "Email or Password Incorrect";

      }

    })
  }

  openSellerLogin(){
    this.showLogin =true;
  }

  openSellerSignUp(){
    this.showLogin = false;
  }

}
