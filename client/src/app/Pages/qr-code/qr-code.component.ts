import { Component, OnInit } from '@angular/core';
import { AuthentificationServiceService } from 'src/app/services/authentification-service.service';
import { QrcodeService } from 'src/app/services/qrcode.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {

  constructor(private service:QrcodeService,private userService:AuthentificationServiceService) { }

  ngOnInit(): void {
    if(this.userService.isUserLoggedIn()){
      
    }
  }
}
