import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationServiceService } from 'src/app/services/authentification-service.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private router:Router,private service:AuthentificationServiceService) { }

  ngOnInit(): void {
  }
  deconnecter(){
    this.service.logOut();
    this.router.navigate(['/login']);
  }
}
