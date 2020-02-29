import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/users.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-view-all-visits',
  templateUrl: './view-all-visits.component.html',
  styleUrls: ['./view-all-visits.component.scss']
})
export class ViewAllVisitsComponent implements OnInit {
  allVisits;



  // addToMyTrip(myFavorit) {}
  constructor(private http: HttpClient, private userService: UsersService) {
    this.getAllTour() ;
  }
  allTours;
  getAllTour(){
    this.userService.getTour().subscribe(data=>{
      this.allTours=data;
    })
  }
  //filteration search
  CountrySearch;
  currentCountry;
  city;currentCity; priceSearch=[];final;
  rateSearch=[];
  search() {
    if (this.CountrySearch != "") {
      this.currentCountry = this.CountrySearch;
      console.log(this.currentCountry,"+"+this.allVisits);
      this.allVisits = this.allVisits.filter(res => {
        this.city = this.allVisits;
        return res.city.toLocaleLowerCase().match(this.CountrySearch.toLocaleLowerCase());
      })
    } else { this.CountrySearch == ""; this.ngOnInit() }
  }
  // 
  filterationPrice(val, checkReturn) {
    let dataprice = this.city;
    for (let i = 0; i < dataprice.length; i++) {
      if (checkReturn == true) {
        if (parseInt(dataprice[i].price) >= parseInt(val)
        &&  parseInt(dataprice[i].price) < parseInt(val) * 4
          && dataprice[i].city == this.currentCountry) {
          this.priceSearch.push(dataprice[i]);
          this.allVisits = this.priceSearch;
          console.log(dataprice[i]);
          
        }
      } else {
        for (let i = 0; i < (this.priceSearch).length; i++) {
          if (parseInt(this.priceSearch[i].price) >= parseInt(val)
          &&  parseInt(this.priceSearch[i].price) < parseInt(val) + 40 ) {
            this.priceSearch.splice(this.priceSearch.indexOf(this.priceSearch[i]), 1);
            console.log("price=" + this.priceSearch);
            this.allVisits = this.priceSearch;
            if ((this.priceSearch).length == 0) {
              this.allTours = this.city
            }
          }
        }
      }
    }
    this.searchFilter();
    if (this.final.length > 0) {
      this.allVisits = this.final;
    }
    console.log("this.priceSearch" + this.allVisits);
  }
  dina = [this.rateSearch, this.priceSearch];
  searchFilter() {
    this.final = this.dina.reduce((a, c) => a.filter(i => c.includes(i)));
    console.log(this.final, "l=" + this.final.length);
  }
  filterationRate(val, checkReturn) {
    let dataprice = this.city;
    for (let i = 0; i < dataprice.length; i++) {
      if (checkReturn == true) {
        if (parseInt(dataprice[i].rate) >= parseInt(val)
        && parseInt(dataprice[i].rate) < parseInt(val) + 2
          && dataprice[i].city == this.currentCountry) {
          this.rateSearch.push(dataprice[i]);
          this.allVisits = this.rateSearch;
          }
      }
      else {
        for (let i = 0; i < (this.rateSearch).length; i++) {
          if ( parseInt(this.rateSearch[i].rate) >= parseInt(val)
        && parseInt(this.rateSearch[i].rate) < parseInt(val) + 2) {
            this.rateSearch.splice(this.rateSearch.indexOf(this.rateSearch[i]), 1);
            console.log("price=" + this.rateSearch);
            this.allVisits = this.rateSearch;
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
      this.allVisits = this.final;
    }
  }
  // 
  addToMyTrip( myFavorite) {
    if (localStorage != null) {
      let user = JSON.parse(localStorage.getItem('currentUser'));

      myFavorite.userId = user.id;
      myFavorite.userName = user.userName;
      
      this.userService.postUserFavoriteTrip(myFavorite).subscribe(data => {
        myFavorite = data
        console.log(myFavorite)
      })
    }
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/tours').subscribe(data => {
      this.allVisits = data;
    })
  }

}
