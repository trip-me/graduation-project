import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-popular-restaurant',
  templateUrl: './popular-restaurant.component.html',
  styleUrls: ['./popular-restaurant.component.scss']
})
export class PopularRestaurantComponent implements OnInit {
restaurants;
popularrestaurants=[];

  constructor(
    private wowService: NgwWowService,
    private restaurantService:RestaurantsService) { 
      this.wowService.init();
    }

  ngOnInit() {
        //get data from service
        this.restaurantService.getToursData().subscribe(data => {
          this.restaurants=data;
          for(let pop of this.restaurants){
            if(pop.rate>= 9){
              if(this.popularrestaurants.length <=3){
                this.popularrestaurants.push(pop)
              }
            }
          }
          console.log( this.popularrestaurants);
          
      })
  }

}
