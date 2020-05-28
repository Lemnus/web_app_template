import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Subscriber } from 'src/app/Entities/subscriber';
import { Message } from 'src/app/Entities/message';
import { ApiService } from 'src/app/Service/API/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.message=new Message();
    this.message.id=1;
    this.getMsg();
  }

  showControls:boolean;
  message:Message;
  apiService=new ApiService(this.httpClient);
  subscriber: Subscriber;
  
  getMsg(){
    this.apiService.getMessage(this.message.id)
    .subscribe((message:Message)=>{
      console.log(message);
      this.message=message;
      if(message.name==null)
      this.getMsg();
    })
  }

  subscribe() {
    this.subscriber=this.subscribeForm.value;
    this.apiService.subscribe(this.subscriber)
    .subscribe((policy: Subscriber)=>{
      console.log("Subscriber created, ", policy);
    });
  }

  subscribeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })

}
