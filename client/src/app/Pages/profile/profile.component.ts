import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationServiceService } from 'src/app/services/authentification-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isProfile = true;
  constructor(private router: Router, private service: AuthentificationServiceService) { }

  ngOnInit(): void {
  }
  goToCommandes(){
    this.isProfile=false;
  }
  goToEditProfile(){
    this.isProfile=true;
  }
  deconnecter(){
    this.service.logOut();
    this.router.navigate(['/login']);
  }
}
