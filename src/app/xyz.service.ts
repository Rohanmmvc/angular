import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class XyzService {
  word: String = "aardvark";
  constructor(private _http: HttpClient) {}
  private handleError(err: HttpErrorResponse) {
      console.log(err.message);
      return Observable.throw(err.message);
  }
  getDictonaryData(name?): Observable<any> {
      if(name){
          this.word = name
      }
      let headers = new HttpHeaders();
      headers.set('Accept','application/json');
      headers.set('app_id','4ebde091');
      headers.set('app_key','7d0740a128b7e39bbc66907835843d6f');


  let myResponse = this._http.get('https://od-api.oxforddictionaries.com/api/v1/entries/en/'+this.word,{headers: headers});
  return myResponse;

  }
}