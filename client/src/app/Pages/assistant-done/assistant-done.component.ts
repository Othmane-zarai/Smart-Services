import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assistant-done',
  templateUrl: './assistant-done.component.html',
  styleUrls: ['./assistant-done.component.css']
})
export class AssistantDoneComponent implements OnInit {
  services=["plomberie","electricite","serrurerie"];
  constructor() { }
  ngOnInit(): void {
  }

}
