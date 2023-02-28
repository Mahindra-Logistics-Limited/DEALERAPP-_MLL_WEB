import { Component, OnInit } from '@angular/core';
import {ApiUrls} from "../../../services/apiUrls";
import {ApiServiceService} from "../../../services/api-service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public consignmentObj: any = {
    pageNo: 1,
    userId: '',
    fromDate: '',
    toDate: '',
    roleName: '',
  }

  public consignmentSearchObj: any = {
    vinOrInvoiceNo: '',
    userId: '',
    roleId: ''
  }
  public allConsignmentList: any = []
  public userDetails: any  = {}
  constructor(private apiUrls: ApiUrls,
              private apiServiceService: ApiServiceService
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.userDetails = JSON.parse(localStorage.getItem('currentUser'));
    // this.toGetAllConsignment();
    this.allConsignmentList = [
      {ID: 1, User: 'Agustin', AuthID: '68114', FormName: 'Fellman', WinHandle: 'Oak Way'},
      {ID: 2, User: 'Alden', AuthID: '98101', FormName: 'Raccoon Run', WinHandle: 'Newsome'},
      {ID: 3, User: 'Ramon', AuthID: '28586', FormName: 'Yorkshire Circle', WinHandle: 'Dennis'},
      {ID: 4, User: 'Elbert', AuthID: '91775', FormName: 'Lee', WinHandle: 'Middleville Road'},
    ]
  }

  toGetAllConsignment(): void {
    this.consignmentObj.userId = this.userDetails.USER_ID.toString();
    this.consignmentObj.roleName = this.userDetails.USER_NAME
    this.apiServiceService.getAll(this.apiUrls.getAllConsignmentTestList, this.consignmentObj).subscribe((res: any) => {
      if (res){
         this.allConsignmentList = res.data;
      }
    })
  }

  toSearchConsignment(keyEvent: any): void{
    if (keyEvent.charCode == 13) {
      this.apiServiceService.getAll(this.apiUrls.getConsignmentStatus, this.consignmentSearchObj).subscribe((res: any) =>{
        if (res){
          this.allConsignmentList = res.data;
        }
      })
    }
  }
}
