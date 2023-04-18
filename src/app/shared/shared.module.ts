import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BackendHeaderComponent } from './backend-header/backend-header.component';
import { BackendFooterComponent } from './backend-footer/backend-footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotificationComponent } from './notification/notification.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BackendHeaderComponent,
    BackendFooterComponent,
    SideNavComponent,
    NotificationComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FlexLayoutModule,
    BackendHeaderComponent,
    BackendFooterComponent,
    NotificationComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    FlexLayoutModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
