import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {

  constructor() { }
  public selectedVal: string;
  ngOnInit(): void {
    this.selectedVal ='option2';
  }
  public onValChange(val: string) {
    this.selectedVal = val;
  }
 

}
