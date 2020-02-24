import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-view-all-restaurants',
  templateUrl: './view-all-restaurants.component.html',
  styleUrls: ['./view-all-restaurants.component.scss']
})
export class ViewAllRestaurantsComponent implements OnInit {

  allRestaurant;
 
  constructor(private http: HttpClient,
    private userService:UsersService
    ) {

   }

   // start add to my trip button
   addToMyTrip(myFavorite) {
    console.log(myFavorite)
    if(localStorage != null){
      let user = JSON.parse(localStorage.getItem('currentUser'))
      myFavorite.userId = user.id;
      myFavorite.userName = user.userName;

      this.userService.postUserFavoriteTrip(myFavorite).subscribe(data=>{
        myFavorite = data
      })
    }
  }
   // End add to my trip button

  ngOnInit() {

  this.http.get('http://localhost:3000/restaurants').subscribe(data => {
    this.allRestaurant = data;
  })
}
}
