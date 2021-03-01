import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationServiceService } from 'src/app/services/authentification-service.service';

@Component({
  selector: 'app-assistantheader',
  templateUrl: './assistantheader.component.html',
  styleUrls: ['./assistantheader.component.css']
})
export class AssistantheaderComponent implements OnInit {
  services=["plomberie","electricite","serrurerie"];
  constructor(private router: Router,private service:AuthentificationServiceService) { }

  ngOnInit(): void {
  }
  deconnecter(){
    this.service.logOut();
    this.router.navigate(['/login']);
  }
}
