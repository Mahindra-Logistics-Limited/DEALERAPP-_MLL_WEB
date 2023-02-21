import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, BehaviorSubject, map} from 'rxjs';
import {ApiUrls} from "./apiUrls";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private _httpClient: HttpClient, private _apiUrls: ApiUrls,) {
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

    public isAuthenticated(): string {
        // @ts-ignore
        return localStorage.getItem('currentUser');
    }

  logIn(loginDetails: any): any {
    return this._httpClient
        .post<any>(this._apiUrls.mainUrl + 'api/login/authenticateUsers', {
            username: loginDetails.username,
            password: loginDetails.password,
        })
        .pipe(
            map(res => {
              if (res) {
                localStorage.setItem('currentUser', JSON.stringify(res.data));
                this.currentUserSubject.next(res);
              }
              return res;
            })
        );
  }

    logOut(): any {
        // @ts-ignore
        localStorage.clear('currentUser');
        this.currentUserSubject.next(null);
    }
}
