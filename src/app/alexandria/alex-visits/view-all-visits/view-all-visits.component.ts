import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-all-visits',
  templateUrl: './view-all-visits.component.html',
  styleUrls: ['./view-all-visits.component.scss']
})
export class ViewAllVisitsComponent implements OnInit {
  allVisits;
  addToMyTrip(e) {
    console.log(e)
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/tours').subscribe(data => {
      this.allVisits = data;
    })
  }

}
