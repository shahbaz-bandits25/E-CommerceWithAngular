import { Login } from './../data-types';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../data-types';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedin = new BehaviorSubject<boolean>(false);
  isLoginFailed = new EventEmitter <boolean>(false);
  constructor(private http: HttpClient, private route: Router) { }

  sellerSignUp(data: SignUp) {

    return this.http.post('http://127.0.0.1:8000/seller', data, { observe: 'response' }).subscribe((result) => {
      this.isSellerLoggedin.next(true);
      
      localStorage.setItem('seler',JSON.stringify(result.body));
      
      this.route.navigate(['seler-home']);

    });
  
  }

  sellerLogin(data: Login) {
    console.warn(data);
    this.http.get(`http://127.0.0.1:8000/${data.email}/${data.password}`,
    { observe: 'response' }).subscribe((result:any) => {
      console.warn(result);
      // console.warn(result.body.length);
      if(result && result.body)
      {
        
        // console.warn("User logged In");
        localStorage.setItem('seler',JSON.stringify(result.body));
        this.route.navigate(['seler-home']);

      }
      else
      {
        // console.warn("logged In failed");
        this.isLoginFailed.emit(true);
      }

    });


  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  reloadSeller(){
    // if(localStorage.getItem('seler')){
    //   this.isSellerLoggedin.next(true);
    //   this.route.navigate(['seler-home']);
    // }


  }
}
