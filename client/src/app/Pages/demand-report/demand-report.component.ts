import { Component, OnInit } from '@angular/core';
import { ImgUploadService } from 'src/app/services/img-upload.service';

@Component({
  selector: 'app-demand-report',
  templateUrl: './demand-report.component.html',
  styleUrls: ['./demand-report.component.css']
})
export class DemandReportComponent implements OnInit {
  filePath!: File;
  img!: File;
  constructor(private imgup:ImgUploadService) { 
  }

  ngOnInit(): void {
  }
  addImgUpload(){
    this.imgup.addRequestImg(this.filePath).subscribe(
      data => {
        this.img=this.filePath;
      },
      err => {
        console.log(err);
      }
    )
  }
}
