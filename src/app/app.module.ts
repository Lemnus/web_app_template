import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './Front/home/home.component';
import { ServicesComponent } from './Front/services/services.component';
import { PortofolioComponent } from './Front/portofolio/portofolio.component';
import { AboutComponent } from './Front/about/about.component';
import { NewsComponent } from './Front/news/news.component';
import { ContactComponent } from './Front/contact/contact.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SupersecretComponent } from './Front/supersecret/supersecret.component';
import { CanActivateGuardGuard } from './Guard/can-activate-guard.guard';
import { AuthServiceService } from './Service/auth-service.service';
import { LoginComponent } from './Front/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    PortofolioComponent,
    AboutComponent,
    NewsComponent,
    ContactComponent,
    SupersecretComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
          return localStorage.getItem('access_token');}
      }
    })
  ],
  providers: [
    AuthServiceService,
    CanActivateGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
