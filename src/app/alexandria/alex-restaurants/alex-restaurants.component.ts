import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlexandriaService } from '../../alexandria.service';
import { HttpClient } from '@angular/common/http';
import { RestaurantsService } from 'src/app/restaurants.service';

@Component({
  selector: 'app-alex-restaurants',
  templateUrl: './alex-restaurants.component.html',
  styleUrls: ['./alex-restaurants.component.scss']
})
export class AlexRestaurantsComponent implements OnInit {


  myvisits; // contains data
  mydatabase;


  constructor(public router: Router,
    public alexService: AlexandriaService,
    private http: HttpClient,
    public restaurantsService: RestaurantsService) {
      
  }
  
  popularVisits = [] // contains popular visits rate >= 4

  ngOnInit() {
    this.restaurantsService.getToursData().subscribe(resp => {
      console.log(resp);
    })

    this.restaurantsService.getToursData().subscribe(visitdata => {
      this.myvisits = visitdata;
      for (let pop of this.myvisits) {
        if(pop.city ==="alex"){
          if (pop.rate >= 9) {
            this.popularVisits.push(pop)
          }
        }
       
      }
    })

    //********************end get data from api***********************8
  }

}
