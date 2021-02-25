import { Component, OnInit } from '@angular/core';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name='';
  email='';
  subject='';
  message='';
  isAdded = false;
  constructor(private claim:ClaimService) { }

  ngOnInit(): void {
  }
  addClaim(){
    this.claim.addClaim(
      this.name,
      this.email,
      this.subject,
      this.message
    ).subscribe(
      data => {
        this.isAdded = true;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

}
