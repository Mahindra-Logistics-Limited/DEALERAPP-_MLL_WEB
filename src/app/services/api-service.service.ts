import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiUrls} from "./apiUrls";
import {map} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _httpClient: HttpClient, public _apiUrls: ApiUrls, public authService: AuthService) { }
  currentUser = this.authService.currentUserValue;
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'accessToken': `${this.currentUser.accessToken}`
  //   })
  // }

  httpOptions = {
    // headers: new HttpHeaders().set('accessToken', this.currentUser.accessToken)
  }


  getUserRoleValue(key: any): string {
    if (key === 1) {
      return 'Planner User';
    } else if (key === 10) {
      return 'Admin';
    } else if (key === 20) {
      return 'Super Admin';
    }else {
      return key;
    }
  }

  getAll(subUrl: any, data: any) {
    return this._httpClient.post(this._apiUrls.mainUrl + subUrl, data);
  }

  get(subUrl: any) {
    return this._httpClient.get(this._apiUrls.mainUrl + subUrl);
  }

  update(subUrl: any, data: any) {
    return this._httpClient.put(this._apiUrls.mainUrl + subUrl, data);
  }

  delete(subUrl: any) {
    return this._httpClient.delete(this._apiUrls.mainUrl + subUrl);
  }

  create(subUrl: any, data: any) {
    return this._httpClient.post(this._apiUrls.mainUrl + subUrl, data).pipe(
        map((res: any) => {
          return res;
        })
    );
  }
}
