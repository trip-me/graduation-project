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
  id;
  constructor(
    private wowService: NgwWowService,
    private http: HttpClient, private service: UsersService,
    private formbuilder: FormBuilder
  ) {
    this.wowService.init();
       // get user post and display it here in guide me page 

       this.service.getUserPost().subscribe(data => {
        this.usersPosts = data;
      })
  
      // get a tour guide  reply  and display it here in guide me page 
  
      this.service.getTourGuideReply().subscribe(data => {
        this.guideReplies = data;
      })

   }
    //send a tour guide reply  to service  to save it in json file
  makeBtnAbled(e) {
    e.target.nextElementSibling.disabled = false;
  }

  onSubmit(event, form) {
    form.value.postUserId = event.target.id;
    this.service.postTourGuideReply(form.value).subscribe(data => {
      this.guideReplies.push(data);
      // this make value apear without refresh page   
    });
  }

  deleteReply(DelRep, id) {
    this.service.deleteTourGuideReply(id).subscribe(data => {
      id = data;
      DelRep.remove();
    })
  }

  ngOnInit() {
    this.wowService.init();
    this.myForm = this.formbuilder.group({
      message: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

}
