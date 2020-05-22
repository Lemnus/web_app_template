import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IMessage, Message } from 'src/app/Entities/message';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }  

  httpOptions = {    
    responseType: 'text'
  }

  public getMessage() {
    return this.httpClient.get<IMessage>('assets/Back/getMsg.php');
  }

  public sendMessage (message: Message): Observable<any> {
    return this.httpClient.post<any>('assets/Back/postMsg.php', message);
  }
}
