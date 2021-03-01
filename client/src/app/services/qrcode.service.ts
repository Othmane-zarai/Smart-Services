import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
const baseURL="http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  constructor(private http:HttpClient) { }
  generateQrCode(username:string){
    return this.http
      .post(baseURL+"/generateCode",{
        'username':username
      },{observe:'response'})
      .pipe(
        map((res:any) => {
          console.log(res);
          return res;
        })
      );
  }
  checkCode(code:string){
    return this.http
      .post(baseURL+"/checkCode",{
        'username':sessionStorage.getItem('username'),
        'code':code
      },{observe:'response'})
      .pipe(
        map((res:any) => {
          console.log(res);
          return res;
        })
      )
  }
}
