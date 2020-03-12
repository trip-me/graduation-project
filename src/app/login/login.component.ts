import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  comingData;
  userEmail;
  userPassword;
  currentuser;
  logedinAdmin;
  constructor(
    private activeRoute: ActivatedRoute,
    private service: UsersService,
    private fb: FormBuilder,
    private router: Router
  ){ }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@gmail|yahoo.[a-zA-Z]{2,}$')]],
      password: ["", [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9].{5,}$')]],
    });
    this.service.getUser().subscribe(userData => {
      return this.comingData = userData;
    })
    if(localStorage.getItem("currentUser") !== null){
      document.getElementById("login-btn").style.display = "none";
      document.getElementById("logout-btn").style.display = "inline";
      document.getElementById("user__myTrip").style.display="inline"
      
    }
  }
  Uid;
  onSubmit(loginForm) {
    this.userEmail = loginForm.get('email').value;
    this.userPassword = loginForm.get('password').value;
    // console.log(this.comingData);

    if (loginForm.valid) {
      for (let i = 0; i < this.comingData.length; i++) {
        if (this.userEmail == this.comingData[i].email  && this.userPassword == this.comingData[i].password) {
          let userObj = this.comingData[i];

          localStorage.setItem("currentUser", JSON.stringify(userObj));
          // this.router.navigate(['/my-trip']);
          this.Uid=JSON.parse(localStorage.getItem("currentUser"));
          this.currentuser = this.comingData[i].email;
          if (this.comingData[i].role === "tourist") {
            this.router.navigate(['/my-trip']);
          }
          else if (this.comingData[i].role === "tourguide") {
            
            this.router.navigate(['/tourguid']);
          }
          else {
            this.router.navigate(['/Home']);
            this.logedinAdmin = this.comingData[i].role;
          }
        }
      }
      if (this.userEmail !== this.currentuser) {
        let emailError = document.getElementById('emailError');
        emailError.innerHTML = "email is not exist";
      }
    }
    if (this.logedinAdmin === "admin") {
      document.getElementById("dashboard").style.display = "inline";
    }
    if(localStorage.getItem("currentUser") !== null){
      document.getElementById("login-btn").style.display = "none";
      document.getElementById("logout-btn").style.display = "inline";
      if( (JSON.parse(localStorage.getItem("currentUser"))).role==="tourist" ){
        document.getElementById("user__myTrip").style.display="inline";
      }
     else if( (JSON.parse(localStorage.getItem("currentUser"))).role==="tourguide" ){
        document.getElementById("tourguide__profile").style.display="inline";
      }
    }else{
    if (localStorage.getItem("currentUser") === null) 
      document.getElementById("user__myTrip").style.display="none";
    }
  }
}