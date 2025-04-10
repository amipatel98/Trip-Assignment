import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTripChartComponent } from './display-trip-chart.component';

describe('DisplayTripChartComponent', () => {
  let component: DisplayTripChartComponent;
  let fixture: ComponentFixture<DisplayTripChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayTripChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTripChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
