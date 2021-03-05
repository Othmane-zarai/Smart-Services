import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
const baseURL="http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  getAssistants(serviceType:string){
    this.http.post(baseURL+"/admin/assistants",{
      'serviceType':serviceType
    },{observe:'response'}).pipe(
      map((res:any) => {
        return res;
      })
    );
  }
  getRequest(){
    return this.http.get(baseURL+"/admin/requests");
  }
  getCandidatures(){
    return this.http.get(baseURL+"/admin/candidatures");
  }
  getClaims(){
    return this.http.get(baseURL+"/admin/claims");
  }
}
