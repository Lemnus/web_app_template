import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Subscriber } from 'src/app/Entities/subscriber';
import { ApiService } from 'src/app/Service/API/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  apiService=new ApiService(this.httpClient);
  subscriber: Subscriber; 

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
