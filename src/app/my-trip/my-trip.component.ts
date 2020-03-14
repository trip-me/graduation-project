import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './../users.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NgwWowService } from 'ngx-wow';


@Component({
  selector: 'app-my-trip',
  templateUrl: './my-trip.component.html',
  styleUrls: ['./my-trip.component.scss']
})
export class MyTripComponent implements OnInit {
  userFavorite;
  users: any[];
  user;
  userId;
  myForm: FormGroup;
  repliesNotifications;
  repliesCounter = 0;

  //Start edit user profile Button
  btnStyle: string;
  //End edit user profile Button

  //start collapse sections
  public isCollapsed1 = false;
  public isCollapsed2 = false;
  public isCollapsed3 = false;
  //End collapse sections

  userObj;
  userName;
  userid

  userTripsVisits = [];
  userTripsRestaurants = [];
  userTripsHotels = [];
  userTrips = [];

  usersImg = [
    {
      img: './../../assets/images/avatar/avatar.png'

    }

  ]

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private formbuilder: FormBuilder,
    private wowService: NgwWowService,
    private userService: UsersService,
  ) {

    this.wowService.init();

    // Start get replies and show it in messages notifications
    this.userService.getTourGuideReply().subscribe(data => {
      this.repliesNotifications = data;
      console.log(this.repliesNotifications);
      ;
      if (this.repliesNotifications.length > 0) {
        for (let reply of this.repliesNotifications) {
          if (reply.postUserId == this.userid) {
            if (reply.replierId != reply.postUserId) {
              this.repliesCounter++
            }
          }
        }
      }
    })
    // End get replies and show it in messages notifications

    //Start get user from local storage and use his data to show it in  profile
    this.userObj = JSON.parse(localStorage.getItem('currentUser'))
    this.userName = this.userObj.userName;
    this.userid = this.userObj.id;
    this.userService.getUserFavoriteTrip().subscribe(data => {
      this.userFavorite = data;
      for (let i in this.userFavorite) {
        if (this.userFavorite[i].userId == this.userid) {
          if (this.userFavorite[i].category == 'visit') {
            this.userTripsVisits.push(this.userFavorite[i]);
          } else if (this.userFavorite[i].category == 'hotel') {
            this.userTripsHotels.push(this.userFavorite[i]);
          } else if (this.userFavorite[i].category == 'restaurant') {
            this.userTripsRestaurants.push(this.userFavorite[i]);
          }
        }
      }
    })
    //End get user from local storage and use his data to show it in  profile
  }


  // user share post in guide me page 
  onSubmit(form) {
    form.value.userName = this.userName
    form.value.userid = this.userid
    // console.log(this.userid);
    this.userService.postUserPost(form.value).subscribe(data => {
      form.value = data;
      form.reset()
    })
  }
  // to make user delete any favorite trip he add it in his profile 
  deleteTrip(id, parent) {
    this.userService.deleteUserFavoriteTrip(id).subscribe(data => {
      id = data
      //this to delete post  immediately form html with out refresh 
      parent.remove()
    })
  }

  //Start Edit user trip button
  editBtn(e) {
    if (e.target.parentElement.lastChild.innerText == "Edit") {
      e.target.parentElement.lastChild.innerText = "Save";
      this.btnStyle = 'showDeleteBtn';
    } else {
      e.target.parentElement.lastChild.innerText = "Edit";
      this.btnStyle = 'item-delete';
    }
  }
  //end Edit user trip button
//start collapse sections 
  collapsePlacesSection(e) {
    e.stopImmediatePropagation();
    this.isCollapsed1 = !this.isCollapsed1
    let sectionIcon = e.target.parentElement.lastChild
    if (sectionIcon.classList.contains('ti-angle-up') ) {
      sectionIcon.classList.remove("ti-angle-up")
      sectionIcon.classList.add("ti-angle-down")
    } else if(sectionIcon.classList.contains('ti-angle-down') ){
      sectionIcon.classList.remove("ti-angle-down")
      sectionIcon.classList.add("ti-angle-up")
    }
  }

  collapseHotelsSection(e) {
    this.isCollapsed2 = !this.isCollapsed2
    let sectionIcon = e.target.parentElement.lastChild
    if (sectionIcon.classList.contains('ti-angle-up') ) {
      sectionIcon.classList.remove("ti-angle-up")
      sectionIcon.classList.add("ti-angle-down")
    } else if(sectionIcon.classList.contains('ti-angle-down') ){
      sectionIcon.classList.remove("ti-angle-down")
      sectionIcon.classList.add("ti-angle-up")
    }
  }

  collapseRestaurantsSection(e) {
    this.isCollapsed3 = !this.isCollapsed3
    let sectionIcon = e.target.parentElement.lastChild
    if (sectionIcon.classList.contains('ti-angle-up') ) {
      sectionIcon.classList.remove("ti-angle-up")
      sectionIcon.classList.add("ti-angle-down")
    } else if(sectionIcon.classList.contains('ti-angle-down') ){
      sectionIcon.classList.remove("ti-angle-down")
      sectionIcon.classList.add("ti-angle-up")
    }
  }
//End collapse sections 

  ngOnInit() {

    //delete button style
    this.btnStyle = 'item-delete';
    //delete button style

    this.myForm = this.formbuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }





}
