import { Component, OnInit } from '@angular/core';

import { AuthentificationServiceService } from 'src/app/services/authentification-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string | null |undefined;
  isLogin=false;
  constructor(private authService: AuthentificationServiceService) { }

  ngOnInit(): void {
    if(this.authService.isUserLoggedIn()){
      if(sessionStorage.getItem('username')!=null){
        this.username=sessionStorage.getItem('username');
        this.isLogin = true;
      }
    }
  }
}
