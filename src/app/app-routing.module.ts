import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./services/auth.guard";
import {
  ConsignmentOrderStatusComponent
} from "./components/dashboard/consignment-order-status/consignment-order-status.component";
import {LayoutComponent} from "./components/layout/layout.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {PendingEpodComponent} from "./components/pending-epod/pending-epod.component";

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: {expectedRole:[1,10,20]},
    component: LayoutComponent,
    children: [
      // {
      //   path: '',
      //   component: DashboardComponent
      // },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'pendingEPOD',
        component: PendingEpodComponent
      },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
