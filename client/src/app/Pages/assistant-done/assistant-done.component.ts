import { Component, OnInit } from '@angular/core';
import { AssistantService } from 'src/app/services/assistant.service';

@Component({
  selector: 'app-assistant-done',
  templateUrl: './assistant-done.component.html',
  styleUrls: ['./assistant-done.component.css']
})
export class AssistantDoneComponent implements OnInit {
  requests = [{
    description:"",
    address:"",
    status:""
  }];
  username = "";
  constructor(private assistantService:AssistantService) { }
  ngOnInit(): void {
    this.username = <string> sessionStorage.getItem('username');
    this.assistantService.getRequests(this.username).subscribe(
      data => {
        this.requests = data.requests;
      },
      err => {
        console.log(err);
      }
    )
  }

}
