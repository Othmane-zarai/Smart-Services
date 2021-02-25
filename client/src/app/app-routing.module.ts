import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ServiceComponent } from './Pages/service/service.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { CommandesComponent } from './Pages/commandes/commandes.component';
import { AdminDemandsComponent } from './Pages/admin-demands/admin-demands.component';
import { AssistantProfileComponent } from './Pages/assistant-profile/assistant-profile.component';
import { AdminProfileComponent } from './Pages/admin-profile/admin-profile.component';
import { DemandsComponent } from './Pages/demands/demands.component';

//import { QrcodeComponent } from './Pages/qrcode/qrcode.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'adminDemandes',
    component: AdminDemandsComponent,
  },
  {
    path: 'commandes',
    component: CommandesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'service',
    component: ServiceComponent,
  },
  {
    path: 'commande',
    component: ContactComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'assistantprofile',
    component: AssistantProfileComponent,
  },
  {
    path: 'adminprofile',
    component: AdminProfileComponent,
  },
  {
    path: 'demands',
    component: DemandsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
