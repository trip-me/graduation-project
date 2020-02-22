import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CitiesService } from '../cities.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-popular-tour',
  templateUrl: './popular-tour.component.html',
  styleUrls: ['./popular-tour.component.scss']
})
export class PopularTourComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  Allcities;
  constructor(private citiesService:CitiesService,private http: HttpClient) { }
 
  ngOnInit() {

    //**************************get cities data from api********************8
    this.http.get('http://localhost:3000/cities').subscribe(data => {
      this.Allcities = data;
    })
    //********************end get data from api***********************8
    
    
  }


 

}
