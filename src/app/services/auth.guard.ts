import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    const currentAccessToken = this.authService.currentUserValue;
    const accessRole = route.data['expectedRole'];
    let expectedRole
    if (currentAccessToken && accessRole.length) {
      for (let i=0; i<accessRole.length; i++){
        if (accessRole[i] === currentAccessToken.USER_ID){
          expectedRole === currentAccessToken.USER_ID;
        }
      }
      if (this.authService.isAuthenticated() && currentAccessToken.USER_ID === expectedRole) {
        return true;
      }
      else {
        // if (currentAccessToken.id === '6308b1c052a0f85de09c330e') {
        //   return true;
        // } else {
          this.router.navigate(['/login'], {queryParams: { returnUrl: state.url }});
          return false;
        // }
      }
    } else {
      this.router.navigate(['/login'], {queryParams: { returnUrl: state.url },});
    }

    // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return true;

  }
  
}
