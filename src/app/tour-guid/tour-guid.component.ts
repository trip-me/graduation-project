import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-tour-guid',
  templateUrl: './tour-guid.component.html',
  styleUrls: ['./tour-guid.component.scss']
})
export class TourGuidComponent implements OnInit {
  tourGuidData;
  constructor(private service: UsersService) {
    this.service.getTourGuid().subscribe(data => {
      this.tourGuidData = data;
    })
  }

  ngOnInit() {
  }

}
