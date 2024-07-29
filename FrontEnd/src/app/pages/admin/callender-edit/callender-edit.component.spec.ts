import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallenderEditComponent } from './callender-edit.component';

describe('CallenderEditComponent', () => {
  let component: CallenderEditComponent;
  let fixture: ComponentFixture<CallenderEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallenderEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallenderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
