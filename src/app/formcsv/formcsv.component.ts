import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formcsv',
  templateUrl: './formcsv.component.html',
  styleUrls: ['./formcsv.component.css']
})
export class FormcsvComponent implements OnInit {
  staticAlertClosed = true;
  public uploader:FileUploader = new FileUploader({url: 'http://marianob.gpl.com.ar:8080/CargaJiraWeb/UploadHandler?action=inicio'});
  
  constructor(private router: Router) { }

  onSubmit() { 
    this.uploader.uploadAll(); 
    setTimeout(()=> this.router.navigate(['/preview']),3000)
    ;
   }

  ngOnInit() {
  }

}
