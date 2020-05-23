import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/Service/API/api.service';
import { IMessage } from '../../Entities/message';
import { Message } from '../../Entities/message';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css',
              '../general/genstyle.css']
})
export class ContactComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  apiService=new ApiService(this.http);
  message: Message;

  

  showMessage() {
    this.apiService.getMessage()
      .subscribe((data: IMessage) => this.message = {
        id: data['id'],
        name: data['name'],
        message: data['message']
      });
  }

  sendMessage() {
    this.message=this.messageForm.value;
    console.log(this.message);
    this.apiService.sendMessage(this.message)
    .subscribe((policy: Message)=>{
      console.log("Policy created, ", policy);
    });
  }

  messageForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  })
}
