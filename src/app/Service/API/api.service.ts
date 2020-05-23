import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
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

  public getMessage() {
    return this.httpClient.get<Message>('assets/Back/getMsg.php');
  }

  public sendMessage (message: Message): Observable<Message> {
    return this.httpClient.post<Message>('assets/Back/postMsg.php', message);    
  }
}
