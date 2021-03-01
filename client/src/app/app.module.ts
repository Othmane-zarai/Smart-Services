import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ServiceComponent } from './Pages/service/service.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Pages/login/login.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthHttpInterceptorService } from './services/basic-auth-http-interceptor-service.service';
import { ProfileComponent } from './Pages/profile/profile.component';
import { CommandesComponent } from './Pages/commandes/commandes.component';
import { EditProfileComponent } from './Pages/edit-profile/edit-profile.component';
import { AdminDemandsComponent } from './Pages/admin-demands/admin-demands.component';
import { AssistantProfileComponent } from './Pages/assistant-profile/assistant-profile.component';
import { AdminProfileComponent } from './Pages/admin-profile/admin-profile.component';
import { DemandsComponent } from './Pages/demands/demands.component';
import { RequestComponent } from './Pages/request/request.component';
import { AssistantListComponent } from './Pages/assistant-list/assistant-list.component';
import { QrCodeComponent } from './Pages/qr-code/qr-code.component';
import { QRCodeModule } from 'angularx-qrcode';
import { AssistantsComponent } from './Pages/assistants/assistants.component';
import { AdminheaderComponent } from './Components/adminheader/adminheader.component';
import { AssistantheaderComponent } from './Components/assistantheader/assistantheader.component';
import { AssistantReceivedComponent } from './Pages/assistant-received/assistant-received.component';
import { AssistantDoneComponent } from './Pages/assistant-done/assistant-done.component';
import { ClaimAdminComponent } from './Pages/claim-admin/claim-admin.component';
import { DemandReportComponent } from './Pages/demand-report/demand-report.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ContactComponent,
    ProfileComponent,
    CommandesComponent,
    EditProfileComponent,
    AdminDemandsComponent,
    AssistantProfileComponent,
    AdminProfileComponent,
    DemandsComponent,
    RequestComponent,
    AssistantListComponent,
    QrCodeComponent,
    AssistantsComponent,
    AdminheaderComponent,
    AssistantheaderComponent,
    AssistantReceivedComponent,
    AssistantDoneComponent,
    ClaimAdminComponent,
    DemandReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthHttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
