import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import {  Message } from 'src/app/Entities/message';
import { LoginAttempt } from 'src/app/Entities/LoginAttempt';
import { Subscriber } from 'src/app/Entities/subscriber';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }  

  public login(login_attempt:LoginAttempt) {
    return this.httpClient.post<{access_token: string}>('assets/Back/login.php', login_attempt);
  }

  public getMessage(term: number) {
    const options = term ?
   { params: new HttpParams().set('id', term.toString()) } : {};
    return this.httpClient.get<Message>('assets/Back/getMsg.php', options);
  }

  public subscribe(subscriber: Subscriber){
    return this.httpClient.post<Subscriber>('assets/Back/subscribe.php', subscriber); 
  }

  public sendMessage (message: Message): Observable<Message> {
    return this.httpClient.post<Message>('assets/Back/postMsg.php', message);    
  }
}
