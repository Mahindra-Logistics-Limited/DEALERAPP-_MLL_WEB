import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {SharedModule} from "./shared/shared.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./interceptors/jwt.interceptor";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConsignmentOrderStatusComponent } from './components/dashboard/consignment-order-status/consignment-order-status.component';
import { ConsignmentOrderHistoryComponent } from './components/dashboard/consignment-order-history/consignment-order-history.component';
import { LayoutComponent } from './components/layout/layout.component';
import {SearchFilterPipe} from "./customDirectives/search-filter.pipe";
import { PendingEpodComponent } from './components/pending-epod/pending-epod.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ConsignmentOrderStatusComponent,
    ConsignmentOrderHistoryComponent,
    LayoutComponent,
    SearchFilterPipe,
    PendingEpodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    SearchFilterPipe
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
