import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-guide-me',
  templateUrl: './guide-me.component.html',
  styleUrls: ['./guide-me.component.scss']
})
export class GuideMeComponent implements OnInit {
  usersPosts: any = [];
  myForm: FormGroup;
  guideReplies;
  userFavoriteTrips = [];
  postUser = [];
  userName;
  allTourGuides = [];
  allUserFavoriteTrip;

  userTripsVisits=[]
  userTripsHotels=[]
  userTripsRestaurants=[]
  cuttentUserId;
  userInLocal;
 
  constructor(
    private wowService: NgwWowService,
    private http: HttpClient,
    private formbuilder: FormBuilder,
    private userService: UsersService
  ) {

    this.wowService.init();
    // get user post and display it here in guide me page 

    this.userService.getUserPost().subscribe(data => {
      this.usersPosts = data;
      console.log(data);

      //get user from local sotrage to use it in replies
      this.userInLocal = JSON.parse(localStorage.getItem('currentUser')).userName
    })
    // *******************************************
    // get a tour guide  reply  and display it here in guide me page 

    this.userService.getTourGuideReply().subscribe(data => {
      this.guideReplies = data;
    })
    // *******************************************
    // get tour guide data 

    this.userService.getTourGuid().subscribe((data: any) => {
      this.allTourGuides = data
      console.log(this.allTourGuides);

    })
    // start if user delet all trips from his profile and he had post in guide me page then the post automatly sould disappear

    let user = JSON.parse(localStorage.getItem('currentUser'))
    this.userName = user.userName;
    this.cuttentUserId = user.id
    console.log(this.userName)

    this.userService.getUserFavoriteTrip().subscribe((data: any) => {
      this.userFavoriteTrips.push(...[...data]);
    })
    // // *******************************************
    this.userService.getUserPost().subscribe((data: any) => {
      this.postUser.push(...[...data]);

    })

    //get all user favorite trip to show more info on the user post 
    this.userService.getUserFavoriteTrip().subscribe(data => {
      this.allUserFavoriteTrip = data;
      for (let item of this.allUserFavoriteTrip) {
        if (item.category == 'visit') {
          this.userTripsVisits.push(item);
        } else if (item.category == 'hotel') {
          this.userTripsHotels.push(item);
        } else if (item.category == 'restaurant') {
          this.userTripsRestaurants.push(item);
        }
      }
    })
      
  }
 
  //send a tour guide reply  to service  to save it in json file
  makeBtnAbled(e) {
    e.target.nextElementSibling.disabled = false;
  }

  onSubmit(event, form, btn) {
    form.value.replierId = this.cuttentUserId
    form.value.replierName = this.userInLocal
    console.log(event.target);

    for (let item of this.usersPosts) {
      if (item['id'] == event.target.id) {
        form.value.postUserId = item['userid'];
        form.value.postId = item['id'];
      }
    }
    this.userService.postTourGuideReply(form.value).subscribe(data => {
      this.guideReplies.push(data);
      // this make value apear without refresh page  
      form.reset()
      btn.disabled = true
    });
  }

  deleteReply(DelRep, id) {
    this.userService.deleteTourGuideReply(id).subscribe(data => {
      id = data;
      DelRep.remove();
    })
  }

  // make like on guide comments 
  like(e) {
    let element = e.target.parentNode.children[0].children[0];
    if (element.style.display == 'block') {
      element.style.display = 'none';
    }
    else {
      element.style.display = 'block';
    }
  }


  deleteUserPost(deleteUserPost, userPost) {
    //get user id from local storage
    let user = JSON.parse(localStorage.getItem('currentUser'))

    if (deleteUserPost.id == user.id) {
      //delete post from guid me page
      for (let item of this.usersPosts) {
        if (item['userid'] == user.id) {
          this.userService.cancelUserPost(userPost.id).subscribe(data => {
            item['id'] = data
          })
        }
      }

      //delete post replies from db

      for (let item of this.guideReplies) {
        if (item["postUserId"] == deleteUserPost.id) {
          if (item["postId"] == userPost.id) {
            this.userService.deleteTourGuideReply(item["id"]).subscribe(data => {
              console.log(data);
            })
          }
        }
      }
      //delete post from html
      userPost.remove()
    }
  }


  ngOnInit() {
    this.wowService.init();
    this.myForm = this.formbuilder.group({
      message: ['', [Validators.required, Validators.minLength(2)]]
    });
    console.log(this.userTripsHotels);

  }

}