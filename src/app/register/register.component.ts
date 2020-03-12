import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { confirmation } from '../customValidator' ;
// import { confirmation } from '../customValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  userInfo;
  comingData;
  foundedEmail
  constructor(private fb: FormBuilder, private service: UsersService, private router: Router) { }
Uid;
  onSubmit(registerForm) {
    this.Uid=JSON.parse(localStorage.getItem("currentUser"));
    if (registerForm.valid) {
      this.userInfo = registerForm.value;
      this.foundedEmail = this.comingData.find(element => element.email == this.userInfo.email);
      if (this.foundedEmail) {      
          let emailError = document.getElementById('emailError')
          emailError.innerHTML="email is exist"
      } else {
        this.service.postUser(this.userInfo).subscribe(data => {
          this.userInfo = data;
          localStorage.setItem("currentUser", JSON.stringify(this.userInfo));
          if (this.userInfo.role === "tourist") {
            this.router.navigate(['/my-trip']);
            document.getElementById("login-btn").style.display = "none";
            document.getElementById("logout-btn").style.display = "inline";
            document.getElementById("user__myTrip").style.display = "inline";
          } else {
            if (this.userInfo.role === "tourguide") {
              this.router.navigate(['/tourguid', this.userInfo.id]);
              document.getElementById("login-btn").style.display = "none";
              document.getElementById("logout-btn").style.display = "inline";
              document.getElementById("user__myTrip").style.display = "inline";
            }
          }
        })
      }
    }
    if (localStorage.getItem("currentUser") !== null) {
      document.getElementById("login-btn").style.display = "none";
      document.getElementById("logout-btn").style.display = "inline";
      if( (JSON.parse(localStorage.getItem("currentUser"))).role==="tourist" ){
        document.getElementById("user__myTrip").style.display="inline";
      } else if( (JSON.parse(localStorage.getItem("currentUser"))).role==="tourguide" ){
        document.getElementById("tourguide__profile").style.display="inline";
      }    
    }else{
    if (localStorage.getItem("currentUser") === null) 
      document.getElementById("user__myTrip").style.display="none";
    }
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
      userName: ["", [Validators.required, Validators.pattern('^[a-z|A-Z]+(?: [a-z|A-Z]+)*$')]],
      email: ["", [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@gmail|yahoo\.[a-zA-Z]{2,}$')]],
      password: ["", [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9].{5,}$')]],
      confirmPassword: ["", [Validators.required]],
      role: ["", [Validators.required]]
    },
    {
      validator:[
      confirmation('password','confirmPassword')
      ]}
    );

    this.service.getUser().subscribe(userData => {
      return this.comingData = userData;
    })
  }
}