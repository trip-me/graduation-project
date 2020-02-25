import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-view-all-hotels',
  templateUrl: './view-all-hotels.component.html',
  styleUrls: ['./view-all-hotels.component.scss']
})
export class ViewAllHotelsComponent implements OnInit {
  allHotels;
  constructor(private http: HttpClient, private userService: UsersService) {

    
   }

  addToMyTrip(myFavorite) {
    if (localStorage != null) {
      let user = JSON.parse(localStorage.getItem('currentUser'))
      myFavorite.userId = user.id;
      myFavorite.userName = user.userName;
      
      this.userService.postUserFavoriteTrip(myFavorite).subscribe(data => {
        myFavorite = data
        console.log(myFavorite);

      })
    }
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/hotels').subscribe(data => {
      this.allHotels = data;
    })
  }

}
