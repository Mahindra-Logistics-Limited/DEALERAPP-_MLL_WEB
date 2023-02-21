import { Component, OnInit } from '@angular/core';
import {ApiUrls} from "../../services/apiUrls";
import {ApiServiceService} from "../../services/api-service.service";
import {animate} from "@angular/animations";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from 'rxjs/operators';
import {map, share, Subscription, timer} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginDetails: any = {
    username: '',
    password: ''
  }
  public returnUrl = '';
  subscription: Subscription | undefined;
  setClockTime = new Date();
  constructor(
      public _apiUrls: ApiUrls,
      public apiService: ApiServiceService,
      public authService: AuthService,
      private router: Router,
      private route: ActivatedRoute,
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.subscription = timer(0, 1000)
        .pipe(
            map(() => new Date()),
            share()
        )
        .subscribe((time: Date) => {
          this.setClockTime = time;
        });
  }

  login(): void {
    this.authService.logIn(this.loginDetails).pipe(first()).subscribe((res: any) => {
      this.router.navigate([this.returnUrl]);
    });
  }
}
