import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // iframe url
// import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap'; // rating
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { VisitsService } from '../../../visits.service';




@Component({
  selector: 'app-visits-details',
  templateUrl: './visits-details.component.html',
  styleUrls: ['./visits-details.component.scss']
})
export class VisitsDetailsComponent implements OnInit {

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
    private visitsService: VisitsService,
    private activroute: ActivatedRoute
  ) {

    

    // Start get id from url
    this.activroute.params.subscribe(param => {
      this.id = param["id"];
      this.visitsService.getToursData().subscribe(data => {
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
 //start map url

 //end map url
  }




}
