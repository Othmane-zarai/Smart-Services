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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,  
    ServiceComponent, 
    HeaderComponent, FooterComponent, LoginComponent, ContactComponent, ProfileComponent, CommandesComponent, EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
