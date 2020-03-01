import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { RestaurantsService } from 'src/app/restaurants.service';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  allvisits;
  // start mapurl code
  MapurlSafe: SafeResourceUrl;
  // end mapurl code

  id;
  toursData;
  singleTourData;

  constructor(
    public router: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private http: HttpClient,
    private restaurantsService: RestaurantsService,
    private activroute: ActivatedRoute,
    private userService: UsersService
  ) {
    // Start get id from url
    this.activroute.params.subscribe(param => {
      this.id = param["id"];
      this.restaurantsService.getToursData().subscribe(data => {
        // console.log(data);
        this.toursData = data;
        this.singleTourData = this.getSigleTour();
        console.log(this.singleTourData);
        let mapurl= this.singleTourData.map;
        this.MapurlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(mapurl);
      })
    })
  }

  getSigleTour() {
    for (let data of this.toursData) {
      if (data.id == this.id) {
        return data;
      }
    }
  }

  // start add to my trip button
  addToMyTrip(myFavorite) {
    console.log(myFavorite)
    let user = JSON.parse(localStorage.getItem('currentUser'))
    if(localStorage != null){
      if(user.role=="tourist"){
        myFavorite.userId = user.id;
        myFavorite.userName = user.userName;
        this.userService.postUserFavoriteTrip(myFavorite).subscribe(data=>{
          myFavorite = data
        })
      }else{alert("u aren't a tourist")}

    }
  }
  ngOnInit() {
  }

}
