import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router:Router) { }
toggleNav(){
  document.getElementsByClassName('navTrigger')[0].classList.toggle('active');
  document.getElementById('mainListDiv').classList.toggle('show_list');
  document.getElementById('mainListDiv').style.display="block"
}
 
  ngOnInit() {
  }

  //log out event
  logOut(){
    localStorage.getItem("currentUser");
    localStorage.removeItem("currentUser");

    document.getElementById('login-btn').style.display = "inline";
    document.getElementById('logout-btn').style.display = "none";
    document.getElementById('dashboard').style.display = "none";
    document.getElementById("user__myTrip").style.display="none";
    this.router.navigate(['/Home'])
  }

}
