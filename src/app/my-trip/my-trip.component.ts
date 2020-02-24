import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from './../users.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-my-trip',
  templateUrl: './my-trip.component.html',
  styleUrls: ['./my-trip.component.scss']
})
export class MyTripComponent implements OnInit {

  userFavorite;
  userTrips = [];
  users: any[];
  user;
  userId;
  url: string;
  myForm: FormGroup;

  // userIdInUrl
  userObj;
  userName;
  userid
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private formbuilder: FormBuilder,
    private userService: UsersService) {

    //to get user from local storage and use his data to show it in  profile

    this.userObj = JSON.parse(localStorage.getItem('currentUser'))
    this.userName = this.userObj.userName;
    this.userid = this.userObj.id;

    this.userService.getUserFavoriteTrip().subscribe(data => {
      this.userFavorite = data;
      for (let i in this.userFavorite) {
        if (this.userFavorite[i].userId == this.userid) {
          this.userTrips.push(this.userFavorite[i]);
        }
      }
    })


  }
  // user share post in guide me page 

  onSubmit(form) {
    form.value.userName = this.userName
    this.userService.postUserPost(form.value).subscribe(data => {
      form.value = data;
      console.log(form.value)
    })
  }
  // to make user delete any favorite trip he add it in his profile 
  cancelTrip(id, parent) {
    this.userService.cancelUserFavoriteTrip(id).subscribe(data => {
      id = data
      //this to delete post  immediately form html with out refresh 
      parent.remove()
    })
  }




  ngOnInit() {
    this.myForm = this.formbuilder.group({
      message: ['', [Validators.required, Validators.minLength(3)]]
    });
  }





}
