import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  userName;
  constructor(
    private router:Router,
    private activeRoute: ActivatedRoute
    ) { }

toggleNav(){
  document.getElementsByClassName('navTrigger')[0].classList.toggle('active');
  document.getElementById('mainListDiv').classList.toggle('show_list');
  document.getElementById('mainListDiv').style.display="block"
}

activeLink(e){
  var links = document.getElementById("navlinks");
  var btns = links.getElementsByClassName("navLink");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }
}
   
   
  // }


  ngOnInit() {
    if(localStorage.getItem('currentUser') !== null){
      this.userName = JSON.parse(localStorage.getItem('currentUser')).userName
    }
   

  }

  //log out event
  logOut(){
    localStorage.getItem("currentUser");
    localStorage.removeItem("currentUser");

    document.getElementById('login-btn').style.display = "inline";
    document.getElementById('logout-btn').style.display = "none";
    document.getElementById('dashboard').style.display = "none";
    document.getElementById("user__myTrip").style.display="none";
    document.getElementById("tourguide__profile").style.display="none";
    this.router.navigate(['/home'])
  }
  guideMe(){
    if(localStorage.getItem("currentUser") !== null){
      this.router.navigate(['/guide-me']);
          
    }else{
    if(localStorage.getItem("currentUser")  === null){
      this.router.navigate(['/login']);
    }
    }
  } 

}
