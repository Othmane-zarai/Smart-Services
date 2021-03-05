import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-demand-report',
  templateUrl: './demand-report.component.html',
  styleUrls: ['./demand-report.component.css']
})
export class DemandReportComponent implements OnInit {
  username="";
  address="";
  date:Date | undefined;
  serviceType="";
  description="";
  prix:number | undefined;
  status="";
  constructor(private request:RequestService,private router:Router) { 
  }

  ngOnInit(): void {
    this.username = <string> sessionStorage.getItem('username');
    this.request.getRequest(this.username).subscribe(
      data => {
        this.address = data.request.address;
        this.date = data.request.date;
        this.serviceType = data.request.serviceType;
        this.description = data.request.description;
        this.prix =data.request.price;
        this.status = data.request.status;
        console.log(this.address);
      },
      err => {
        console.log(err);
      }
    )
  }
  redirectProfile(){
    this.router.navigate(["/profile"]);
  }

}
