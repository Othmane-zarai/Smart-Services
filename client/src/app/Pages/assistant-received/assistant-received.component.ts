import { Component, OnInit } from '@angular/core';
import { AssistantService } from 'src/app/services/assistant.service';

@Component({
  selector: 'app-assistant-received',
  templateUrl: './assistant-received.component.html',
  styleUrls: ['./assistant-received.component.css']
})
export class AssistantReceivedComponent implements OnInit {
  username="";
  serviceType="";
  description="";
  address="";
  constructor(private assistantService:AssistantService) { }

  ngOnInit(): void {
    this.username = <string> sessionStorage.getItem('username');
    this.serviceType = <string> sessionStorage.getItem('serviceType');
    this.assistantService.getRequest(this.serviceType,this.username).subscribe(
      data => {
        this.description = data.request.description;
        this.address = data.request.address;
      },
      err => {
        console.log(err);
      }
    )
  }

}
