import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
const baseURL = "http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }
  addRequest(serviceType:string,address:string,description:string){
    return this.http
      .post(baseURL+"/request",{
        'username':sessionStorage.getItem('username'),
        'serviceType':serviceType,
        'address':address,
        'description':description,
      })
      .pipe(
        map((res:any) => {
          return res;
        })
      );
  }
  getRequest(username:string){
    return this.http.post(baseURL+"/request/get",{
      username:username
    }).pipe(
      map((res:any) => {
        return res;
      })
    )
  }
}
