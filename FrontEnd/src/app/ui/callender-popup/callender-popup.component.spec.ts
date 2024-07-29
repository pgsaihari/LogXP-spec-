import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallenderPopupComponent } from './callender-popup.component';

describe('CallenderPopupComponent', () => {
  let component: CallenderPopupComponent;
  let fixture: ComponentFixture<CallenderPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallenderPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallenderPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
