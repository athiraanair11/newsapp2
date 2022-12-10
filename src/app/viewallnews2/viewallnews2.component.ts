import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallnews2',
  templateUrl: './viewallnews2.component.html',
  styleUrls: ['./viewallnews2.component.css']
})
export class Viewallnews2Component implements OnInit {

  constructor(private api:ApiService) {this.dataFromApi() }

  dataFromApi=()=>{

    this.api.fetchNews().subscribe(

      (response:any)=>{

        this.news=response.news
      }
    )
  }



  news:any=[]

  ngOnInit(): void {
  }

}
