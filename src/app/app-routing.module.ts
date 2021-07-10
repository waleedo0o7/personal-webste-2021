import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: '',   redirectTo: 'home', pathMatch: 'full'},
  {path : 'home' , component : HomepageComponent},
  {path : 'portfolio-list' , component : PortfolioListComponent},
  {path : 'portfolio' , component : PortfolioComponent},
  {path : 'services' , component : ServicesComponent},
  {path : 'contact' , component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
