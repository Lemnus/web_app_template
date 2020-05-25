import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public jwtHelper: JwtHelperService) { }

  public isAuthenticated(): boolean {   
    const token = localStorage.getItem('access_token');
    return token != null;
    //return !this.jwtHelper.isTokenExpired(token);
  }
}
