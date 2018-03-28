import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    isLoggedIn= true;
    h=true;
     constructor(public location: Location, public router:Router) {
         console.log(location.path())
     }


    ngOnInit(){
        console.log(this.location.path())
        this.router.events.subscribe((event) => {
            if(this.location.path()=="/login"){
                this.isLoggedIn=false;
            }
            else {
                this.isLoggedIn=true;
            }



           // if (val.url == '/login') { this.isLoggedIn = false }
           // if (val.url == '/') { this.isLoggedIn = false }

        });
    }

    isMap(path){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(path == titlee){
        return false;
      }
      else {
        return true;
      }

    }
    hide(){
        this.h=!this.h;
    }
}
