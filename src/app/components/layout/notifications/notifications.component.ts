import { Component, OnInit } from '@angular/core';
import {ApiUrls} from "../../../services/apiUrls";
import {ApiServiceService} from "../../../services/api-service.service";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(private apiUrls: ApiUrls,
              private apiServiceService: ApiServiceService) { }

  ngOnInit(): void {
  }


  getNotificationList(): void{
    this.apiServiceService.getAll(this.apiUrls.allConsignmentNotifications, {}).subscribe((res: any) => {
      if (res){

      }

    })
  }
}
