import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { VisitsService } from '../visits.service';

@Component({
  selector: 'app-popualr-visits',
  templateUrl: './popualr-visits.component.html',
  styleUrls: ['./popualr-visits.component.scss']
})
export class PopualrVisitsComponent implements OnInit {
visits;
popularvisits=[];
  constructor(
    private wowService: NgwWowService,
    private visitsService : VisitsService
    ) {
    this.wowService.init();
   }

  ngOnInit() {
     //get data from service
     this.visitsService.getToursData().subscribe(data => {
      this.visits=data;
      for(let pop of this.visits){
        if(pop.rate>= 9){
          if(this.popularvisits.length <=3){
            this.popularvisits.push(pop)
          }
          
        }
      }
  })
  }

}
