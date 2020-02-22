import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-all-hotels',
  templateUrl: './view-all-hotels.component.html',
  styleUrls: ['./view-all-hotels.component.scss']
})
export class ViewAllHotelsComponent implements OnInit {
  allHotels;
  addToMyTrip(e) {
    console.log(e)
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/hotels').subscribe(data => {
      this.allHotels = data;
    })
  }

}
