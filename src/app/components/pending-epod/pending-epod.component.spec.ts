import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingEpodComponent } from './pending-epod.component';

describe('PendingEpodComponent', () => {
  let component: PendingEpodComponent;
  let fixture: ComponentFixture<PendingEpodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingEpodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingEpodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
