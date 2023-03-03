import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public orderStatus: any;
  public tab: any = Number;
  public consignmentOrderStatusComponent= <any>Boolean;
  public consignmentOrderHistoryComponent= <any>Boolean;
  constructor() { }

  ngOnInit(): void {
    this.changeTab(1);
  }

  changeTab(tabKey: number) {
    this.tab = tabKey ? tabKey : 1;
    switch (tabKey) {
      case 1:
        this.consignmentOrderStatusComponent = true;
        this.consignmentOrderHistoryComponent = false;
        break;
      case 2:
        this.consignmentOrderHistoryComponent = true;
        this.consignmentOrderStatusComponent = false;
        break;
    }
  }
}
