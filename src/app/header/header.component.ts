import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType: string = 'default';
  sellerName: string = '';
  constructor(private route:Router){}

  ngOnInit(): void{
    this.route.events.subscribe((val:any)=>{
      // console.warn(val);
      if(val.url)
      {
        console.warn(val.url);
        
        if(localStorage.getItem('seler') && val.url.includes('seler'))
        {
          this.menuType = "seler";
          let sellerStore = localStorage.getItem('seler');
          let sellerData = sellerStore && JSON.parse(sellerStore);
          this.sellerName = sellerData.name;


        }
        else{
          this.menuType = 'default';
        }
      }
      

    })
  }

  logOut(){
    localStorage.removeItem('seler');
    this.route.navigate(['/']);
  }

}
