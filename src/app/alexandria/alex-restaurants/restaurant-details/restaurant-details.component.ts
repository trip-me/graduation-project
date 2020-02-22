import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { RestaurantsService } from 'src/app/restaurants.service';

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
    private activroute: ActivatedRoute
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
  ngOnInit() {
  }

}
