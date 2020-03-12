import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-tour-guid',
  templateUrl: './tour-guid.component.html',
  styleUrls: ['./tour-guid.component.scss']
})
export class TourGuidComponent implements OnInit {
  tourGuidData = [];
  FindtourGuide;
  constructor(private service: UsersService) {
  }
  counter=0;
  ngOnInit() {
    this.service.getUser().subscribe(data => {
      this.FindtourGuide = data;
      for (let i = 0; i < this.FindtourGuide.length; i++) {
        if (this.counter < 4) {
          if (this.FindtourGuide[i].role == "tourguide") {
            this.tourGuidData.push(this.FindtourGuide[i])
            console.log(this.tourGuidData);
            this.counter++;
          }
        }
      }
    })
  }

}