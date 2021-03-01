import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationServiceService } from 'src/app/services/authentification-service.service';
import { QrcodeService } from 'src/app/services/qrcode.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {
  username="";
  qrData:string | undefined;
  codeInput="";
  constructor(private service:QrcodeService,private userService:AuthentificationServiceService,private router:Router) { }

  ngOnInit(): void {
    if(this.userService.isUserLoggedIn()){
      if(sessionStorage.getItem('username') != null){
        this.username = <string> sessionStorage.getItem('username');
        this.service.generateQrCode(this.username).subscribe(
          data => {
            this.qrData = data.body.message;
            console.log(this.qrData);
          },
          error => {
            console.log(error);
          }
        )
      }
    }
  }
  checkCode(){
    if(this.userService.isUserLoggedIn()){
      this.service.checkCode(this.codeInput).subscribe(
        data => {
          console.log(data);
          this.router.navigate(["/demandeReport"]);
        }
      )
    }
  }
}
