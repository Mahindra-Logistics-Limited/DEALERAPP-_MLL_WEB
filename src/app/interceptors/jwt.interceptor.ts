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
      request = request.clone({
        setHeaders: {
          // 'Content-Type': 'application/formData',
          'accessToken': `${currentUser.data.accessToken}`,
          'devicetype': 'web'
        }
        // setHeaders: {
        //   Authorization: `Bearer ${currentUser.accessToken}`,
        // },
      });
    }
    return next.handle(request);
  }
}
