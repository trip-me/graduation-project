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
  //type of resisterform is formgroup
  constructor(private service: UsersService, private activeRoute: ActivatedRoute, private fB: FormBuilder) {
    

    // form validator 
    this.registerForm = this.fB.group({
      aboutUserName: ['', [Validators.required, Validators.pattern(/^[a-z]+$/)]]
      // aboutName: ['', [Validators.required],
    })
    this.guideUser = this.fB.group({
      aboutUserName: ['', [Validators.required, Validators.pattern(/^[a-z]+$/)]],
      experience: ['', [Validators.required, Validators.pattern(/^[a-z]+$/)]],
      language: ['', [Validators.required, Validators.pattern(/^[a-z]+$/)]],
      OtherGuiding: ['', [Validators.required, Validators.pattern(/^[a-z]+$/)]],
      PrivateGuide: ['', [Validators.required, Validators.pattern(/^[a-z]+$/)]]
    })

  }
  putguideData;
  putexperinceUser;
  finalData = { ...this.putguideData, ...this.putexperinceUser }
  guidPackages(id) {
    this.service.gettourguide(id).subscribe(data => {
      this.usersGuide = data;
      console.log(this.usersGuide);

    })
  }
  tourGuide = JSON.parse(localStorage.getItem("currentUser"));
  onSubmit(register) {
    this.putguideData = {
      "userName": this.tourGuide.userName,
      "userMail": this.tourGuide.email,
      "password": this.tourGuide.password,
      "confirmPassword": this.tourGuide.confirmPassword,
      "role": this.tourGuide.role,

    };
    console.log(this.putguideData, "putguideData=" + this.tourGuide.id);

  }
  tourGuideUser(guideUser) {
    this.putexperinceUser = {
      "userName": this.tourGuide.userName,
      "userMail": this.tourGuide.email,
      "password": this.tourGuide.password,
      "confirmPassword": this.tourGuide.confirmPassword,
      "role": this.tourGuide.role,
      "aboutUserName": guideUser.get('aboutUserName').value,
      "experience": guideUser.get("experience").value,
      "language": guideUser.get("language").value,
      "OtherGuiding": guideUser.get("OtherGuiding").value,
      "PrivateGuide": guideUser.get("PrivateGuide").value
    }
    // console.log(this.putexperinceUser);
    this.service.putuserdata(this.tourGuide.id, this.putexperinceUser).subscribe(data => {
      this.l = [data];
      // console.log(this.service.putuserdata(this.tourGuide.id ,this.putexperinceUser));
      console.log("l==" + this.l);
    });
  }
  editData(guideUser){
    // guideUser.get("OtherGuiding").disabled="false";  
    // for(let i=0 ; i<(document.getElementsByClassName('form-control')).length ; i++){

    //   document.getElementsByClassName('form-control')[i].setAttribute("disabled","false");
    // }

    // }   
  }
  l;
  FindtourGuide;
  usersGuide ;
  userLogin;
  x=[];
  ngOnInit() {
    // get tour guides user
    if(localStorage.getItem("currentUser") !== null){
          // document.getElementById('edit').style.display="block";
          // document.getElementById('save ').style.display="block";
          this.userLogin=JSON.parse(localStorage.getItem('currentUser'));
          this.usersGuide=this.userLogin;
          console.log("u="+this.usersGuide);
          
        }else{
          this.activeRoute.paramMap.subscribe(param => {
            this.guidPackages(param.get('id'));
          })
        }
  }
}
