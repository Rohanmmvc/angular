import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { XyzService } from './xyz.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  dictData:any;
  
  
  constructor(private _route: ActivatedRoute, private router: Router, private xyzService: XyzService, ) {}
    
    getData() {
      this.xyzService.getDictonaryData(this.name).subscribe(
        data => {

            this.dictData = data;
              console.log(this.dictData);
              } ,

          error => {
              console.log("some error occured");
              console.log(error.errorMessage);
          }
      );
  
  }}