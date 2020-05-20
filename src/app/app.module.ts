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
import { SendMessageService } from './Service/SendMessage/send-message.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    PortofolioComponent,
    AboutComponent,
    NewsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SendMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
