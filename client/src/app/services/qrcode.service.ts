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
      .post(baseURL+"",{
        'username':username
      },{observe:'response'})
      .pipe(
        map((res:any) => {
          return res;
        })
      );
  }
}