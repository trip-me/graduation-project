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
  usersPosts;
  myForm: FormGroup;
  guideReplies;
  userFavoriteTrips = [];
  postUser = [];
  userName;

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
    })

    // get a tour guide  reply  and display it here in guide me page 

    this.userService.getTourGuideReply().subscribe(data => {
      this.guideReplies = data;
    })


    // start if user delet all trips from his profile and he had post in guide me page then the post automatly sould disappear

    let user = JSON.parse(localStorage.getItem('currentUser'))
    this.userName = user.userName;
    console.log(this.userName)

    this.userService.getUserFavoriteTrip().subscribe((data: any) => {
      this.userFavoriteTrips.push(...[...data]);
    })


    this.userService.getUserPost().subscribe((data: any) => {
      this.postUser.push(...[...data]);
    })

    // setTimeout(() => {

    //   for (let j in this.postUser) {
    //     // console.log(this.postUser[j].userName)

    //     for (let i in this.userFavoriteTrips) {
    //       if (this.postUser[j].id != this.userFavoriteTrips[i].id) {
    //         this.userService.cancelUserPost(this.postUser[j].id).subscribe(data => {
    //           this.postUser[j].id = data
    //         console.log(1)
    //         })
    //       }
    //       else {
    //         console.log(2)
    //       }
    //       // console.log(this.userFavoriteTrips[i].userName)  
    //     }

    //   }
    // }, 1000);

    // console.log(this.userFavoriteTrips);
    // end 

  }
  //send a tour guide reply  to service  to save it in json file
  makeBtnAbled(e) {
    e.target.nextElementSibling.disabled = false;
  }

  onSubmit(event, form, btn) {
    form.value.postUserId = event.target.id;
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
    // console.log(e.target.parentNode.children[0].children[0])
    let element = e.target.parentNode.children[0].children[0];

    if (element.style.display == 'block') {

      element.style.display = 'none';
    }
    else {

      element.style.display = 'block';
    }

  }


  deleteUserPost(deleteUserPost) {
    let user = JSON.parse(localStorage.getItem('currentUser'))
     if (deleteUserPost.id == user.id) {
    this.userService.cancelUserPost(deleteUserPost.id).subscribe(data =>
      deleteUserPost.id = data
    )
    // remove post from html
    deleteUserPost.remove()
    }

  }


  ngOnInit() {
    this.wowService.init();
    this.myForm = this.formbuilder.group({
      message: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

}
