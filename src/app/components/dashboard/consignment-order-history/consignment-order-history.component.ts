import {Component, Input, OnInit} from '@angular/core';
import {ApiUrls} from "../../../services/apiUrls";
import {ApiServiceService} from "../../../services/api-service.service";

@Component({
  selector: 'app-consignment-order-history',
  templateUrl: './consignment-order-history.component.html',
  styleUrls: ['./consignment-order-history.component.scss']
})
export class ConsignmentOrderHistoryComponent implements OnInit {

  @Input() orderStatus: any;
  @Input() tab: any;
  public orderHistoryList : any = []


  constructor( public _apiUrls: ApiUrls,
               public apiService: ApiServiceService,) { }

  ngOnInit(): void {
    this.orderHistoryList = [
      {ID: 1, VINNo: 'M2M13661', Source: 'ongole', Destination: 'vizag', state: 'Andhra'},
      {ID: 1, VINNo: 'M2M13661', Source: 'hederbad', Destination: 'hyderbad', state: 'Telangana'},
      {ID: 1, VINNo: 'M2M13661', Source: 'hdfsbfs', Destination: 'sdfjhdsjf', state: 'goa'},
    ]
  }

}
