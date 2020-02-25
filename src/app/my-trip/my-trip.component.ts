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

  userIdInUrl
  userObj;
  userName;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private formbuilder: FormBuilder,
    private userService: UsersService)
    { 
  
      //get url 
      router.events.subscribe((val) => {
        this.url = location.path();
      });
  
      //I send data to service by postusertrip() when user click (add to my favorit)
      // and  use  (getuserTrip) to get data here to show it in his profile
  
      this.userService.getUserFavoriteTrip().subscribe(data => {
        this.userFavorite = data;
        //  compire the id in url  with id in the user favorite to show  just the special list for this  unique user
        for (let i in this.userFavorite) {
          if (this.url.includes(this.userFavorite[i].userId)) {
            this.userTrips.push(this.userFavorite[i]);
          }
        }
      })
  
      //to get user name to show it in  profile
  
      this.http.get('http://localhost:3000/users/').subscribe((data: any[]) => {
        console.log(data)
        this.userIdInUrl = this.route.snapshot.params.id
        this.userObj = data.find(user => user.id == this.userIdInUrl)
        this.userName = this.userObj.userName
        console.log(this.userObj)
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
