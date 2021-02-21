import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

const baseURL = "http://localhost:3000/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthentificationServiceService {
  constructor(private http: HttpClient) { }
  authenticate(username:string,password:string){
    return this.http
        .post(baseURL+"/signin",{username,password},{observe:'response'})
        .pipe(
          map((res:any) => {
            sessionStorage.setItem('username',username);
            sessionStorage.setItem('password',password);
            return res;
          })
        );
  }
  signup(username:string, email:string, password:string){
    return this.http
       .post(baseURL+"/signup",{username,email,password},{observe:'response',responseType:'json'})
       .pipe(
         map((res:any) => {
           sessionStorage.setItem('username',username);
           return res;
         })
       );
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem("username");
    console.log(user);
    console.log(!(user === null));
    return !(user===null);
  }
}
