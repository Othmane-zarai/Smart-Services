import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-demands',
  templateUrl: './admin-demands.component.html',
  styleUrls: ['./admin-demands.component.css']
})
export class AdminDemandsComponent implements OnInit {
  services=["plomberie","electricite","serrurerie"];
  constructor() { }

  ngOnInit(): void {
  }

}
