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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
   throw Error(
      'Something bad happened; please try again later.');
  };

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
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  messageForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  })
}
