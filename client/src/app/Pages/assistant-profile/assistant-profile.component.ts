import { Component, OnInit } from '@angular/core';
import { AssistantService } from 'src/app/services/assistant.service';


@Component({
  selector: 'app-assistant-profile',
  templateUrl: './assistant-profile.component.html',
  styleUrls: ['../profile/profile.component.css']
})
export class AssistantProfileComponent implements OnInit {
  username="";
  email="";
  address="";
  serviceType="";

  constructor(private assistant:AssistantService) { }

  ngOnInit(): void {
    this.username= <string> sessionStorage.getItem('username');
    this.assistant.getAssistantInformation(this.username).subscribe(
      data => {
        this.username = data.assistant.username;
        this.email = data.assistant.email;
        this.address = data.assistant.address;
        this.serviceType = data.assistant.serviceType;
      },
      err => {
        console.log(err);
      }
    )
  }

}
