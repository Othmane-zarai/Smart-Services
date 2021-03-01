import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  address='';
  description='';
  noCommande=true;
  constructor(private request:RequestService) { }

  ngOnInit(): void {
  }
  addRequest(){
    this.noCommande=false;
    this.request.addRequest(
      "plomberie",
      this.address,
      this.description
    ).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }
}
