import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationServiceService } from 'src/app/services/authentification-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='';
  email='';
  password='';
  invalidLogin = true;
  constructor(private router: Router,private loginService: AuthentificationServiceService) { }

  ngOnInit(): void {
  }
  checkLogin(){
    this.loginService.authenticate(this.username,this.password).subscribe(
      data => {
        if(data.body.role==="client"){
          this.router.navigate(["/service"]);
          //console.log(data);
          this.invalidLogin = false;
        }
        if(data.body.role==="admin"){
          this.router.navigate(["/adminDemandes"]);
        }
        if(data.body.role==="assistant"){
          this.router.navigate(["/assistantprofile"]);
        }
      },
      error => {
        this.invalidLogin = true;
        console.log(error);
      }
    )
  }
  signUp(){
    this.loginService.signup(this.username,this.email,this.password).subscribe(
      data => {
        this.router.navigate(["/login"]);
      },
      error => {
        console.log(error);
      }
    )
  }
}
