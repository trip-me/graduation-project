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
    console.log("loyality");
  }
  }
}
