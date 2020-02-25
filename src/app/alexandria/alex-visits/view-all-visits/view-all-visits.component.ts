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


  addToMyTrip(myFavorite) {
    if (localStorage != null) {
      let user = JSON.parse(localStorage.getItem('currentUser'))
      myFavorite.userId = user.id;
      myFavorite.userName = user.userName;
      this.userService.postUserFavoriteTrip(myFavorite).subscribe(data => {
        myFavorite = data
        console.log(data);

      })
    }
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/tours').subscribe(data => {
      this.allVisits = data;
    })
  }

}
