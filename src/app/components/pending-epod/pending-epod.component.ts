import { Component, OnInit } from '@angular/core';
import {ApiUrls} from "../../services/apiUrls";
import {ApiServiceService} from "../../services/api-service.service";

@Component({
  selector: 'app-pending-epod',
  templateUrl: './pending-epod.component.html',
  styleUrls: ['./pending-epod.component.scss']
})
export class PendingEpodComponent implements OnInit {

  public pendingEpodList: any = [];
  public pendEpodSearchFilter: any;
  constructor(public _apiUrls: ApiUrls,
              public apiService: ApiServiceService,) { }

  ngOnInit(): void {
    this.pendingEpodList = [
      {ID: 1, LRNumber: '230113033'},
      {ID: 2, LRNumber: '3456765432'},
      {ID: 3, LRNumber: '3456765432'},
      {ID: 4, LRNumber: '3456765432'},
      {ID: 5, LRNumber: '3456765432'},
      {ID: 6, LRNumber: '3456765432'},
      {ID: 7, LRNumber: '3456765432'},
    ]
  }

}
