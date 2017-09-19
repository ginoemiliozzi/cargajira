import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-formcsv',
  templateUrl: './formcsv.component.html',
  styleUrls: ['./formcsv.component.css']
})
export class FormcsvComponent implements OnInit {
  staticAlertClosed = true;
  public uploader:FileUploader = new FileUploader({url: 'http://localhost:8080/CargaJiraWeb/UploadHandler?action=inicio'});
  
  constructor() { }

  onSubmit() { 
    this.uploader.uploadAll();    
   }

  ngOnInit() {
  }

}
