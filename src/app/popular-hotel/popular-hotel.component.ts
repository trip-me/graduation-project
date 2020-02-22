import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'app-popular-hotel',
  templateUrl: './popular-hotel.component.html',
  styleUrls: ['./popular-hotel.component.scss']
})
export class PopularHotelComponent implements OnInit {
  hotels;
  popularhotels=[];
  constructor(private wowService: NgwWowService,
    private hotelService:HotelsService
    ) {
    this.wowService.init();
   }

  ngOnInit() {
    //get data from service
    this.hotelService.getToursData().subscribe(data => {
      this.hotels=data
      for(let pop of this.hotels){
        if(pop.rate>= 9){
          if(this.popularhotels.length <=3){
            this.popularhotels.push(pop)
          }
        }
      }
      console.log(this.popularhotels);
  })

}
}