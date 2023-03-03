import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public currentUser: any = {};
  constructor(private authService : AuthService,
              private router: Router,) {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
    });
  }

  ngOnInit(): void {
  }

  logOutUser(): void {
    this.authService.logOut();
    window.location.reload();
    this.router.navigate(['/login']);
  }

}
