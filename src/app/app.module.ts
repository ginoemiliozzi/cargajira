import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { FormcsvComponent } from './formcsv/formcsv.component';
import { FileUploadModule } from "ng2-file-upload";
import { RouterModule }   from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PreviewTableComponent } from './preview-table/preview-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FormcsvComponent,
    PreviewTableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    FileUploadModule,
    Ng2SmartTableModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/formcsv',
        pathMatch: 'full'
      },
      {
        path:'formcsv',
        component: FormcsvComponent
      },
      {
        path:'preview',
        component: PreviewTableComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
