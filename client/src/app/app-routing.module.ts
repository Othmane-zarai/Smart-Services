import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ServiceComponent } from './Pages/service/service.component';
import { CommandeComponent } from './Pages/commande/commande.component';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"service",
    component:ServiceComponent
  },
  {
    path:"commande",
    component:CommandeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
