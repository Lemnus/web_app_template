import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from 'src/app/Service/API/api.service';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    //this.login();
  }

  apiService=new ApiService(this.httpClient);

  // login() {
  //   this.apiService.login()
  //   .subscribe();
  // }

}
