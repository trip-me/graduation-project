import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HotelsService } from 'src/app/hotels.service';
import { UsersService } from 'src/app/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  allvisits;
  reviews = []
  myForm: FormGroup;
  currentRate = 0;
  selectedLevel;
  // start mapurl code
  MapurlSafe: SafeResourceUrl;
  // end mapurl code

  id;
  toursData;
  singleTourData;
  constructor(
    public sanitizer: DomSanitizer,
    private hotelsService: HotelsService,
    private activroute: ActivatedRoute,
    private userService: UsersService,
    private fb: FormBuilder,
    config: NgbRatingConfig
  ) {
    // Start get id from url
    this.activroute.params.subscribe(param => {
      this.id = param["id"];
      this.hotelsService.getToursData().subscribe(data => {
        // console.log(data);
        this.toursData = data;
        this.singleTourData = this.getSigleTour();
        console.log(this.singleTourData);
        let mapurl = this.singleTourData.map;
        this.MapurlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(mapurl);
      })
    })


    //form rate
    config.readonly = true;
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
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if (localStorage != null) {
      if (user.role == "tourist") {
        if (!myFavorite.userId) {
          myFavorite.userId = user.id;
          myFavorite.userName = user.userName;
          this.userService.postUserFavoriteTrip(myFavorite).subscribe(data => {
            myFavorite = data
            // start change icon style
            if (myFavorite) {
              let icon = document.getElementById("addicon")
              icon.removeAttribute('class')
              icon.setAttribute('class', "fas fa-heart")
              icon.style.color = "red"
            }
            // end change icon style
          })
        }
      } else { alert("u aren't a tourist") }
    }
  }
  // End add to my trip button

  ngOnInit() {

    //review form 
    this.myForm = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.required]],
      message: ['', Validators.required],
      email: ["", [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@gmail|yahoo\.[a-zA-Z]{2,}$')]],

    });
  }

  //on submit review form
  onSubmit(form) {
    this.reviews.push({ ...form.value, rate: this.selectedLevel })
    console.log(this.reviews);
    form.reset()
  }
  selectChangeHandler(event: any) {
    //update the ui
    this.selectedLevel = event.target.value;
    console.log(this.selectedLevel);

  }
}
