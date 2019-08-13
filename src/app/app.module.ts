// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
//
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
//
// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule }      from '@angular/core'; //1
import { BrowserModule } from '@angular/platform-browser'; //1
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here //1

import { AppComponent }  from './app.component'; //2
import { HeroDetailComponent } from './hero-detail.component'; //1

@NgModule({ //3
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { } //4
