import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public authService: AuthService,
              private router: Router,) { }

  ngOnInit(): void {
  }

    logOutUser() {
      this.authService.logOut();
      window.location.reload();
      this.router.navigate(['/login']);
    }
}
