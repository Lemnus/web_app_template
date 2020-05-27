import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/Service/API/api.service';
import { HttpClient } from '@angular/common/http';
import { LoginAttempt } from 'src/app/Entities/LoginAttempt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  apiService=new ApiService(this.httpClient);
  login_attempt: LoginAttempt;

  login(){
    this.login_attempt=this.loginForm.value;
    this.apiService.login(this.login_attempt).subscribe(res => {
      localStorage.setItem('access_token', res.access_token);
      window.location.assign("supersecret");
    });
  }

  logout() {
    console.log("Shu");
    localStorage.removeItem('access_token');
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
}
