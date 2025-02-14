import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCardsComponent } from './widget-cards.component';

describe('WidgetCardsComponent', () => {
  let component: WidgetCardsComponent;
  let fixture: ComponentFixture<WidgetCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
