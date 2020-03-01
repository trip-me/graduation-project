import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Router } from '@angular/router';
import { AlexandriaService } from '../../alexandria.service';
import { HttpClient } from '@angular/common/http';
import { HotelsService } from 'src/app/hotels.service';

@Component({
  selector: 'app-alex-hotels',
  templateUrl: './alex-hotels.component.html',
  styleUrls: ['./alex-hotels.component.scss']
})
export class AlexHotelsComponent implements OnInit {
  myvisits; // contains data
  mydatabase;

  constructor(
    private wowService: NgwWowService,
    public router: Router,
    public alexService: AlexandriaService,
    private http: HttpClient,
    public hotelsService: HotelsService) {
    this.wowService.init();
   }
   popularVisits = [] // contains popular visits rate >= 9

  ngOnInit() {
    this.hotelsService.getToursData().subscribe(resp => {
      console.log(resp);
    })

    this.hotelsService.getToursData().subscribe(visitdata => {
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
