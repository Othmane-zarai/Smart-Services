import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
const baseUrl = "http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class AssistantService {

  constructor(private http: HttpClient) { }
  getRequest(serviceType:string,username:string){
    return this.http.post(baseUrl+"/assistant/request",{
      'serviceType':serviceType
    },{observe:'response'})
    .pipe(
      map((res:any) => {
        return res;
      })
    );
  }
  getAssistantInformation(username:string){
    return this.http.post(baseUrl+"/assistant/infos",{
      username:username
    },{observe:'response'})
    .pipe(
      map((res:any) => {
        return res;
      })
    );
  }
  getRequests(username:string){
    return this.http.post(baseUrl+"/assistant/requests",{
      'assistant':username
    },{observe:'response'})
    .pipe(
      map((res:any) => {
        return res;
      })
    );
  }
}
