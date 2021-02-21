import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthentificationServiceService } from './authentification-service.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router, private authService : AuthentificationServiceService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authService.isUserLoggedIn()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
