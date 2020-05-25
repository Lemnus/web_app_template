import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardGuard implements CanActivate, CanLoad {

  constructor(public auth: AuthServiceService, public router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isUserLoggedIn=this.auth.isAuthenticated();
    if (!isUserLoggedIn) {
      this.router.navigate(['login'])
    }
    return isUserLoggedIn;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
