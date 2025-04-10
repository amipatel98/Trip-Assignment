import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Trip } from './models/trip.model';
import { DisplayTripComponent } from './components/display-trip/display-trip.component';
import { TripFormComponent } from './components/trip-form/trip-form.component';
import { DisplayTripChartComponent } from './components/display-trip-chart/display-trip-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DisplayTripComponent,
    TripFormComponent,
    DisplayTripChartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'trip-assignment-task';
  trips: Trip[] = [];

  onTripAdd(newTrip: Trip) {
    if (this.trips.length > 0) {
      const prevTrip = this.trips[this.trips.length - 1];

      if (prevTrip.end === newTrip.start) {
        newTrip.level = 1;
      } else if (
        prevTrip.start === newTrip.start &&
        prevTrip.end === newTrip.end
      ) {
        newTrip.level = 2;
      } else {
        newTrip.level = 1;
      }
    } else {
      newTrip.level = 1;
    }
    this.trips = [...this.trips, { ...newTrip }];
  }
}
