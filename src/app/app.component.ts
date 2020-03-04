import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'graduation-project';
  
  ngOnInit() {
    if(localStorage.getItem("currentUser") !== null){
      document.getElementById("login-btn").style.display = "none";
      document.getElementById("logout-btn").style.display = "inline";
      if( (JSON.parse(localStorage.getItem("currentUser"))).role==="tourist" ){
        document.getElementById("user__myTrip").style.display="inline";
      }else if( (JSON.parse(localStorage.getItem("currentUser"))).role==="tourguide" ){
        document.getElementById("tourguide__profile").style.display="inline";
      }
    }else{
      if (localStorage.getItem("currentUser") === null) 
      document.getElementById("user__myTrip").style.display="none";
    }
    }
}
