import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.data) {
      console.log(currentUser, currentUser.data.accessToken, '==============')
      request = request.clone({
        setHeaders: {

          // 'Content-Type': 'application/formData',
          // 'test': `${currentUser.accessToken}`,
          'accessToken': `${currentUser.data.accessToken}`,
          'devicetype': 'web'
        }
        // setHeaders: {
        //   Authorization: `Bearer ${currentUser.accessToken}`,
        // },
      });
    }
    console.log(request)
    return next.handle(request);
  }
}
