import { Component, OnInit } from '@angular/core';
import { Http,Response, JsonpModule } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-preview-table',
  templateUrl: './preview-table.component.html',
  styleUrls: ['./preview-table.component.css']
})
export class PreviewTableComponent implements OnInit {
  filas: any;
  private filasUrl = 'http://marianob.gpl.com.ar:8080/CargaJiraWeb/PreviewTable';
  settings = {
    columns: {
      entidad: {
        title: 'Entidad'
      },
      recurso: {
        title: 'Recurso'
      },
      resproy: {
        title: 'Resumen proyecto'
      },
      horas: {
        title: 'Horas'
      }
    }
  };
  constructor(private http: Http) { }

  ngOnInit() {
    this.getFilas().subscribe(
        filasAPI => this.filas = filasAPI, //Bind to view
         err => {// Log errors if any
             console.log(err);
         });
  }
  getFilas() : Observable<any> {
    // ...using get request
    return this.http.get(this.filasUrl)
                    // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json()) 
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
} 

}
