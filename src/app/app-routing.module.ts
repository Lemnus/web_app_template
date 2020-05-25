import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SupersecretComponent} from './Front/supersecret/supersecret.component'
import {LoginComponent} from './Front/login/login.component'
import {CanActivateGuardGuard} from './Guard/can-activate-guard.guard'

const routes: Routes = [
  { 
    path: 'supersecret',
    component: SupersecretComponent,
    canActivate: [CanActivateGuardGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
