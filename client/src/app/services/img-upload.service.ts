import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
const baseUrl = "http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class ImgUploadService {

  constructor(private http:HttpClient) { }
  addAssistantImg(file:File){
    return this.http
         .post(baseUrl+"/assistantImg",{
          username:sessionStorage.getItem('username'),
          file:file
         })
         .pipe(
           map((res:any) => {
             return res;
           })
         );
  }
  addRequestImg(file:File){
    return this.http
       .post(baseUrl+"/requestImg",{
         username:sessionStorage.getItem('username'),
         file:file
       })
       .pipe(
         map((res:any) => {
           return res;
         })
       );
  }
}
