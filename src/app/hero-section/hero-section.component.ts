import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  searchname;
  constructor(private router:Router) { 
    
  }
      filterSearch(){
        if(this.searchname == "resturant"){
        this.router.navigate(['/AllRestaurants',{country:"cairo"}]);
        }
    
      }
  ngOnInit() {
  }

}
