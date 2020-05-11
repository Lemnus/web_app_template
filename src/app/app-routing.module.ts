import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PortofolioComponent } from './p/portofolio.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  // { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: '', component: HomeComponent },
  // { path: 'News', component: NewsComponent },
  // { path: 'Portofolio', component: PortofolioComponent },
  { path: 'Services', component: ServicesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
