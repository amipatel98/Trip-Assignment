import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTripComponent } from './display-trip.component';

describe('DisplayTripComponent', () => {
  let component: DisplayTripComponent;
  let fixture: ComponentFixture<DisplayTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayTripComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
