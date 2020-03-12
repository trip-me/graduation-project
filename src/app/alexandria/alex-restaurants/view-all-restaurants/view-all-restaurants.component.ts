import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/users.service';
import { RestaurantsService } from 'src/app/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-restaurants',
  templateUrl: './view-all-restaurants.component.html',
  styleUrls: ['./view-all-restaurants.component.scss']
})
export class ViewAllRestaurantsComponent implements OnInit {

  allRestaurant;
 
   // start add to my trip button
   
   // End add to my trip buttonvi

  constructor(private http: HttpClient,
    private userService: UsersService,
    private restaurantsService: RestaurantsService,
    private activeRoute:ActivatedRoute
  ) { 
     //select query param 
     this.activeRoute.paramMap.subscribe(param=>
      { 
        let x=param.get('country');
        console.log(x);
        // this.search();
    })
   }
   newsearch(currentCountry){
    // this.currentCountry = this.CountrySearch;
    // console.log(this.currentCountry,"+"+this.allRestaurant);
    this.allRestaurant = this.allRestaurant.filter(res => {
      // this.city = this.allRestaurant;
      console.log(this.allRestaurant );
      
      return res.city.toLocaleLowerCase().match(currentCountry.toLocaleLowerCase());
    })
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
  
  // addToMyTrip(myFavorite) {
  //   let user = JSON.parse(localStorage.getItem('currentUser'))
  //   if (localStorage != null ) {
  //     // if( user.role == "tourist"){
  //       myFavorite.userId = user.id;
  //       myFavorite.userName = user.userName;
  //       console.log(myFavorite)
  
  //       this.userService.postUserFavoriteTrip(myFavorite).subscribe(data => {
  //         myFavorite = data;
  //       console.log(myFavorite)

  //       })
  //     }//else{alert("aren't tourist")}
  //   // }
  // }
  // End add to my trip button

  dinaa = []
  CountrySearch: string;
  currentCountry = "alex";
  ngOnInit() {
    this.restaurantsService.getToursData().subscribe(data => {
      this.allRestaurant = data;
      console.log((this.allRestaurant));
    })
    
  
  }
  city = [];
  search() {
    if (this.CountrySearch != "") {
      this.currentCountry = this.CountrySearch;
      console.log(this.currentCountry,"+"+this.allRestaurant);
      this.allRestaurant = this.allRestaurant.filter(res => {
        this.city = this.allRestaurant;
        return res.city.toLocaleLowerCase().match(this.CountrySearch.toLocaleLowerCase());
      })
    } else { this.CountrySearch == ""; this.ngOnInit() }
  }
  
  x;
  y = [];
  final = [];
  serviceFilter = [];
  dina = [this.y, this.serviceFilter];
  commonservice() {
    this.final = this.dina.reduce((a, c) => a.filter(i => c.includes(i)))
    console.log(this.final);
  }
  // filteration method of price
  filterationPrice(val, checkReturn) {
    let dataprice = this.city;
    for (let i = 0; i < dataprice.length; i++) {
      if (checkReturn == true) {
        if (parseInt(dataprice[i].price) >= parseInt(val)
          && parseInt(dataprice[i].price) < parseInt(val) * 4
          && dataprice[i].city == this.currentCountry) {
          this.serviceFilter.push(dataprice[i]);
          this.allRestaurant = this.serviceFilter;
        }
      } 
      else {
        for (let i = 0; i < (this.serviceFilter).length; i++) {
          if (parseInt(this.serviceFilter[i].price) >= parseInt(val)
          && parseInt(this.serviceFilter[i].price) < parseInt(val) * 4
          ) {
            
            this.serviceFilter.splice(this.serviceFilter.indexOf(this.serviceFilter[i]), 1);
            console.log(this.serviceFilter);
            
            this.allRestaurant = this.serviceFilter;
           /* console.log(this.allRestaurant)*/
          //   if ((this.serviceFilter).length == 0) {
          //     this.allRestaurant = this.city
          //   }
          }
        }
      }

    }
    console.log("y=", this.serviceFilter);
    this.commonservice();
    if (this.final.length > 0) {
      this.allRestaurant = this.final;
    }
  }
  // filteration method of services
  filterationSearch(val, checkReturn) {
    this.x = this.city;
    for (let i = 0; i < (this.x).length; i++) {
      if (checkReturn == true) {
        if ((this.x[i].service) === val && this.x[i].city === this.currentCountry) {
          this.y.push(this.x[i]);
          this.allRestaurant = this.y;
          console.log("y=", this.y);
        }
      } else {
        for (let i = 0; i < (this.y).length; i++) {
          if ((this.y[i].service) === val) {
            this.y.splice(this.y.indexOf(this.y[i]), 1);
            console.log(this.y);
            this.allRestaurant = this.y;
            console.log(this.allRestaurant)
            // if ((this.y).length == 0) {
            //   this.allRestaurant = this.city
            // }
          }
        }
      }
    }
    console.log("y=" + this.y);
    this.commonservice();
    if (this.final.length > 0) {
      this.allRestaurant = this.final;
    }
  }
}
