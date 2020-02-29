import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-view-all-visits',
  templateUrl: './view-all-visits.component.html',
  styleUrls: ['./view-all-visits.component.scss']
})
export class ViewAllVisitsComponent implements OnInit {
  allVisits;

  constructor(private http: HttpClient, private userService: UsersService) { }


  addToMyTrip(myFavorit) {
    if (localStorage != null) {
      let user = JSON.parse(localStorage.getItem('currentUser'));

      myFavorit.userId = user.id;
      myFavorit.userName = user.userName;
      
      this.userService.postUserFavoriteTrip(myFavorit).subscribe(data => {
        myFavorit = data
        console.log(myFavorit)
      })
    }
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/tours').subscribe(data => {
      this.allVisits = data;
    })
  }

}
