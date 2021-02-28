import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assistantheader',
  templateUrl: './assistantheader.component.html',
  styleUrls: ['./assistantheader.component.css']
})
export class AssistantheaderComponent implements OnInit {
  services=["plomberie","electricite","serrurerie"];
  constructor() { }

  ngOnInit(): void {
  }

}
