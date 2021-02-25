import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  serviceType='';
  address='';
  description='';
  constructor(private request:RequestService) { }

  ngOnInit(): void {
  }
  addRequest(){
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
