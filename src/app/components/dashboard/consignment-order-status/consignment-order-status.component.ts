import {Component, Input, OnInit} from '@angular/core';
import {ApiUrls} from "../../../services/apiUrls";
import {ApiServiceService} from "../../../services/api-service.service";

@Component({
  selector: 'app-consignment-order-status',
  templateUrl: './consignment-order-status.component.html',
  styleUrls: ['./consignment-order-status.component.scss']
})
export class ConsignmentOrderStatusComponent implements OnInit {

  @Input() tab: any;
  @Input() orderStatus: any;
  public orderStatusList: any = [];
  public orderStatusListObj: any = {
    userId: "10",
    roleName: "ADMIN",
    fromDate: "",
    toDate: "",
    pageNo: 1
  }

  public orderDetails : boolean = false;
  public oneorderDetailList: any;
  constructor( public _apiUrls: ApiUrls,
               public apiService: ApiServiceService,) { }

  ngOnInit(): void {
    // this.AllConsignmentTestList();
    this.orderStatusList = [
      {ID: 1, VINNo: 'M2M13661', Source: 'Chakan', Destination: 'Wagholi', state: 'PATNA'},
      {ID: 1, VINNo: 'M2M13661', Source: 'Chakan', Destination: 'Wagholi', state: 'MUZFFARPUR'},
      {ID: 1, VINNo: 'M2M13661', Source: 'Chakan', Destination: 'Wagholi', state: 'WAGHOLEI'},
    ]
  }

  AllConsignmentTestList(): void{
    this.apiService.getAll(this._apiUrls.getAllConsignmentTestList, this.orderStatusListObj).subscribe((res: any) => {
      if (res){
        this.orderStatusList = res.data;
      }
    })
  }

  orderViewDetailes(orderStatus: any) {
    this.oneorderDetailList = orderStatus;
    this.orderDetails = true;
  }
}
