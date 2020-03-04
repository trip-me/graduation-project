import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlexandriaService } from '../../alexandria.service';
import { HttpClient } from '@angular/common/http';
import { VisitsService } from '../../visits.service';



@Component({
  selector: 'app-alex-visits',
  templateUrl: './alex-visits.component.html',
  styleUrls: ['./alex-visits.component.scss']
})
export class AlexVisitsComponent implements OnInit {

  myvisits; // contains data
  mydatabase;

  constructor(public router: Router,
    public alexService: AlexandriaService,
    private http: HttpClient,
    public visitsService: VisitsService) {
  }

  popularVisits = [] // contains popular visits rate >= 4
  ngOnInit() {

    //**************************get cities data from api********************8

    this.visitsService.getToursData().subscribe(resp => {
      console.log(resp);
    })

    this.visitsService.getToursData().subscribe(visitdata => {

      this.myvisits = visitdata;

      for (let pop of this.myvisits) {
        if (pop.city === "alex") {
          if (pop.rate >= 9) {
            if(pop.id<1.6){
              this.popularVisits.push(pop)
              console.log(pop);
            }
          }
        }
      }
    })

    //********************end get data from api***********************8
  }

}


