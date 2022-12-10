import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Addnews2Component } from './addnews2/addnews2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Viewallnews2Component } from './viewallnews2/viewallnews2.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const myroutes=[

  {path:"",component:Addnews2Component},
  {path:"view",component:Viewallnews2Component}
]

@NgModule({
  declarations: [
    AppComponent,
    Addnews2Component,
    NavbarComponent,
    Viewallnews2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
