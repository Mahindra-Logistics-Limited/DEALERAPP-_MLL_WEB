import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentOrderHistoryComponent } from './consignment-order-history.component';

describe('ConsignmentOrderHistoryComponent', () => {
  let component: ConsignmentOrderHistoryComponent;
  let fixture: ComponentFixture<ConsignmentOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignmentOrderHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
