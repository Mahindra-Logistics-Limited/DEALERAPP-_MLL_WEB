import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentOrderStatusComponent } from './consignment-order-status.component';

describe('ConsignmentOrderStatusComponent', () => {
  let component: ConsignmentOrderStatusComponent;
  let fixture: ComponentFixture<ConsignmentOrderStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignmentOrderStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
