import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/Service/API/api.service';
import { Message } from '../../Entities/message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css',
              '../general/genstyle.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  ApiService: ApiService;
  message: Message;

  showMessage() {
    this.ApiService.getMessage()
      .subscribe((data: Message) => this.message = {
        id: data['id'],
        name: data['name'],
        message: data['message']
      });
  }

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  })
}
