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
      filterSearch(searchname){
        if(searchname == "resturant"){
        this.router.navigate(['/AllRestaurants']);
      }else{
        this.router.navigate(['/AllHotels']);
        
        }
    
      }
  ngOnInit() {
  }

}

