import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { XyzService } from './xyz.service';
import {HttpClientModule} from '@angular/common/http' 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {RouterModule , Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent}
    ])
  ],
  providers: [XyzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
