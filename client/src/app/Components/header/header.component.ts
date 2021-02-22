import { Component, OnInit } from '@angular/core';
import { AuthentificationServiceService } from 'src/app/services/authentification-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  buttonVal: string | null |undefined;
  constructor(private authService: AuthentificationServiceService) { }

  ngOnInit(): void {
    if(this.authService.isUserLoggedIn()){
      if(sessionStorage.getItem('username')!=null){this.buttonVal=sessionStorage.getItem('username');}
    }
    this.buttonVal="Se connecter";
  }

}
