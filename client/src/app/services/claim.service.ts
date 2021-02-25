import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
const baseURL = "http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http: HttpClient) { }
  addClaim(name:string,email:string,subject:string,message:string){
    return this.http
       .post(baseURL+"/claim",{
         'name':name,
         'email':email,
         'subject':subject,
         'message':message
       },{observe:'response'})
       .pipe(
         map((res:any) => {
           return res;
         })
       );
  }
}
