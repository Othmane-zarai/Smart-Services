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
import { AssistantListComponent } from './Pages/assistant-list/assistant-list.component';
import { QrCodeComponent } from './Pages/qr-code/qr-code.component';
import { AssistantheaderComponent } from './Components/assistantheader/assistantheader.component';
import { AssistantReceivedComponent } from './Pages/assistant-received/assistant-received.component';
import { AssistantDoneComponent } from './Pages/assistant-done/assistant-done.component';
import { ClaimAdminComponent } from './Pages/claim-admin/claim-admin.component';
import { DemandReportComponent } from './Pages/demand-report/demand-report.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'demandeReport',
    component:DemandReportComponent
  },
  {
    path:'claimAdmin',
    component:ClaimAdminComponent
  },
  {
    path:'assistantreceived',
    component:AssistantReceivedComponent
  },
  {
    path:'assistantdone',
    component:AssistantDoneComponent
  },
  {
    path:'assistant',
    component:AssistantheaderComponent
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
  },
  {
    path:"assistants",
    component:AssistantListComponent
  },
  {
    path:"qrcode",
    component:QrCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
