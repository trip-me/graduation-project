import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tour-guid-profile',
  templateUrl: './tour-guid-profile.component.html',
  styleUrls: ['./tour-guid-profile.component.scss']
})
export class TourGuidProfileComponent implements OnInit {
  // getTourGuidPackage
  guidData;
  registerForm: FormGroup;
  guideUser: FormGroup;
  imgSrc;
  DiscriptionImgTrip;
  putguideData;
  putexperinceUser;
  finalData = { ...this.putguideData, ...this.putexperinceUser }
  //type of resisterform is formgroup
  constructor(private service: UsersService, private activeRoute: ActivatedRoute, private fB: FormBuilder) {
    // form validator 

    this.registerForm = this.fB.group({
      aboutUserName: ['', [Validators.required, Validators.pattern(/^[a-z]+$/)]]
    })
    // form builder group
    this.guideUser = this.fB.group({
      aboutUserName: [{value:"", disabled:true}, [Validators.required, Validators.pattern(/^[a-z]+$/)]],
      experience: [{value:"", disabled:true}, [Validators.required, Validators.pattern(/^[a-z]+$/)]],
      language: [{value:"", disabled:true}, [Validators.required, Validators.pattern(/^[a-z]+$/)]],
      OtherGuiding: [{value:"", disabled:true}, [Validators.required, Validators.pattern(/^[a-z]+$/)]],
      PrivateGuide: [{value:"", disabled:true}, [Validators.required, Validators.pattern(/^[a-z]+$/)]],
      tripDiscription: [{value:"", disabled:true}, [Validators.required, Validators.pattern(/^[a-z]+$/)]]
    })
  }
  guidPackages(id) {
    this.service.gettourguide(id).subscribe(data => {
      this.usersGuide = data;
      console.log(this.usersGuide);
    })
  }
  tourGuide = JSON.parse(localStorage.getItem("currentUser"));
  // function of tour guide data
  userdisc;
  userlanguage;
  userExperince;
  userOtherGuiding;
  userPrivateGuide;
  userImgTrip;
  tourguideimg;
  usertripDiscription;
  baseimg;
  tourGuideUser(guideUser) {
    if(guideUser.get('aboutUserName').value==""){
      this.userdisc=this.tourGuide.aboutUserName;
    }else{
      this.userdisc=guideUser.get('aboutUserName').value;
    }
    if(guideUser.get("experience").value==""){
      this.userExperince= this.tourGuide.experience;
    }else{
      this.userExperince=guideUser.get("experience").value;
    }
    if(guideUser.get("language").value==""){
      this.userlanguage= this.tourGuide.language;
    }else{
      this.userlanguage=guideUser.get("language").value;
    }
    if(guideUser.get("OtherGuiding").value==""){
      this.userOtherGuiding= this.tourGuide.OtherGuiding;
    }else{
      this.userOtherGuiding=guideUser.get("OtherGuiding").value;
    }
    if(guideUser.get("PrivateGuide").value==""){
      this.userPrivateGuide= this.tourGuide.PrivateGuide;
    }else{
      this.userPrivateGuide=guideUser.get("PrivateGuide").value;
    }
    if(guideUser.get("tripDiscription").value==""){
      this.usertripDiscription= this.tourGuide.tripDiscription;
    }else{
      this.usertripDiscription=guideUser.get("tripDiscription").value;
    }
    // if(this.baseimg==""){
    //   this.userImgTrip=this.tourGuide.tripImg;
    // }else{
    //   this.userImgTrip=this.DiscriptionImgTrip
    // }
    // if(this.imgSrc!=null){imgSrc
    //   this.tourguideimg=this.tourGuide.tourGuideImg;
    // }else{
    //   this.tourguideimg=this.imgSrc
    // }
    this.putexperinceUser = {
      "userName": this.tourGuide.userName,
      "email": this.tourGuide.email,
      "password": this.tourGuide.password,
      "confirmPassword": this.tourGuide.confirmPassword,
      "role": this.tourGuide.role,
      "id": this.tourGuide.id,
      "tourGuideImg": this.imgSrc ,//
      "aboutUserName": this.userdisc,
      "experience": this.userExperince,
      "language": this.userlanguage ,
      "OtherGuiding": this.userOtherGuiding,
      "PrivateGuide": this.userPrivateGuide,
      "tripImg": this.DiscriptionImgTrip,
      "tripDiscription": this.usertripDiscription 
    }
    let x=localStorage.setItem('currentUser',JSON.stringify(this.putexperinceUser));
    this.service.putuserdata(this.tourGuide.id, this.putexperinceUser).subscribe(data => {
      this.l = [data];
      console.log("l==" + this.l);
      guideUser.disable();
      console.log(guideUser.get("PrivateGuide").value);
      window.location.reload();
    });
  }
// file reader to put tour guide image in json
  onfilechange(e){
    let y= new FileReader();
    y.readAsDataURL(e.target.files[0]);
    y.onload=(_event)=>{this.imgSrc= y.result;}
    let x=e.target.files[0];
    console.log(this.imgSrc);
    
  }
  k;
// file reader to put tour guide trip image in json  
  tripImg(event){
    this.k= new FileReader();
    this.k.readAsDataURL(event.target.files[0]);
    this.k.onload=(_event)=>{this.DiscriptionImgTrip= this.k.result;
      
    this.baseimg=event.target.files[0];
    console.log(this.baseimg.name);
    
  }}
  // 
  
  // 
  editData(guideUser,e) {
    document.getElementById("edit").style.background="none";
    document.getElementById("edit").style.color="#03a241";
    let inputform=document.getElementsByClassName("form-control");
    for(let i=0; i<inputform.length; i++){
      // inputform[i].style.border = "2px solid rgb(214, 214, 214)";
    }
    guideUser.enable();
  }
  l;
  FindtourGuide;
  usersGuide;
  userLogin;
  x = [];
  eman;
 
  ngOnInit() {

    // get tour guides user
    let storeData = JSON.parse(localStorage.getItem("currentUser"));
    if (storeData != null) {
      if (storeData.role == "tourguide") {
        this.eman = true;
      } else { this.eman = false }
      this.userLogin = JSON.parse(localStorage.getItem('currentUser'));
      this.usersGuide = this.userLogin;
      console.log("u=" + this.usersGuide);
    } else {
      this.activeRoute.paramMap.subscribe(param => {
        this.guidPackages(param.get('id'));
      })
      let but = document.getElementById("edit")

    }
  }
}

