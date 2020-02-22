import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HotelsService } from 'src/app/hotels.service';
@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
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
    private hotelsService: HotelsService,
    private activroute: ActivatedRoute
  ) { 
     // Start get id from url
     this.activroute.params.subscribe(param => {
      this.id = param["id"];
      this.hotelsService.getToursData().subscribe(data => {
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
