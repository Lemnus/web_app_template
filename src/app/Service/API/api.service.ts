import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IMessage } from 'src/app/Entities/message';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getMessage() {
    return this.httpClient.get<IMessage>('assets/Back/getMsg.php');
  }
}
