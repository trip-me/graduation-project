import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/users.service';
import { HotelsService } from 'src/app/hotels.service';

@Component({
  selector: 'app-view-all-hotels',
  templateUrl: './view-all-hotels.component.html',
  styleUrls: ['./view-all-hotels.component.scss']
})
export class ViewAllHotelsComponent implements OnInit {
  allHotels;

  constructor(private http: HttpClient, private service: HotelsService,private userService: UsersService) { }

  addToMyTrip(myFavorite) {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if (localStorage != null) {
      if(user.role=="tourist"){
      myFavorite.userId = user.id;
      myFavorite.userName = user.userName;

      this.userService.postUserFavoriteTrip(myFavorite).subscribe(data => {
        myFavorite = data
        console.log(myFavorite);

      })
    }else{alert("u aren't a tourist")}
    }
  }

  ngOnInit() {
    // this.http.get('http://localhost:3000/hotels').subscribe(data => {
    //   this.allHotels = data;
    // })
    this.service.getToursData().subscribe(data => {
      this.allHotels = data;
    })
  }
  currentCity;
  city = [];
  hotelSearch: string;
  rateSearch = [];
  priceSearch = [];
  final = [];
  search() {
    if (this.hotelSearch != "") {
      this.currentCity = this.hotelSearch;
      console.log(this.currentCity);
      this.allHotels = this.allHotels.filter(res => {
        this.city = this.allHotels;
        this.allHotels = this.allHotels;
        return res.city.toLocaleLowerCase().match(this.hotelSearch.toLocaleLowerCase());
      })
    } else { this.hotelSearch == ""; this.ngOnInit() }
  }
  dina = [this.rateSearch, this.priceSearch];
  searchFilter() {
    this.final = this.dina.reduce((a, c) => a.filter(i => c.includes(i)));
    console.log(this.final, "l=" + this.final.length);
  }
  filterationPrice(val, checkReturn) {
    let dataprice = this.city;
    for (let i = 0; i < dataprice.length; i++) {
      if (checkReturn == true) {
        if (parseInt(dataprice[i].price) >= parseInt(val)
        &&  parseInt(dataprice[i].price) < parseInt(val) + 40
          && dataprice[i].city == this.currentCity) {
          this.priceSearch.push(dataprice[i]);
          this.allHotels = this.priceSearch;
          console.log([this.priceSearch]);
        }
      } else {
        for (let i = 0; i < (this.priceSearch).length; i++) {
          if (parseInt(this.priceSearch[i].price) >= parseInt(val)
          &&  parseInt(this.priceSearch[i].price) < parseInt(val) + 40 ) {
            this.priceSearch.splice(this.priceSearch.indexOf(this.priceSearch[i]), 1);
            console.log("price=" + this.priceSearch);
            this.allHotels = this.priceSearch;
            // if ((this.priceSearch).length == 0) {
            //   this.allHotels = this.city
            // }
          }
        }
      }
    }
    console.log(this.priceSearch);
    this.searchFilter();
    if (this.final.length > 0) {
      this.allHotels = this.final;
    }

    console.log("this.priceSearch" + this.allHotels);
  }
  filterationRate(val, checkReturn) {
    let dataprice = this.city;
    for (let i = 0; i < dataprice.length; i++) {
      if (checkReturn == true) {
        if (parseInt(dataprice[i].rate) >= parseInt(val)
        && parseInt(dataprice[i].rate) < parseInt(val) + 2
          && dataprice[i].city == this.currentCity) {
          this.rateSearch.push(dataprice[i]);
          this.allHotels = this.rateSearch;
          }
      }
      else {
        for (let i = 0; i < (this.rateSearch).length; i++) {
          if ( parseInt(this.rateSearch[i].rate) >= parseInt(val)
        && parseInt(this.rateSearch[i].rate) < parseInt(val) + 2) {
            this.rateSearch.splice(this.rateSearch.indexOf(this.rateSearch[i]), 1);
            console.log("price=" + this.rateSearch);
            this.allHotels = this.rateSearch;
            // if ((this.rateSearch).length == 0) {
            //   this.allHotels = this.city
            // }
          }
        }
      }
    }
    console.log("rate=", this.rateSearch);
    this.searchFilter();
    if (this.final.length > 0) {
      this.allHotels = this.final;
    }
  }

}
