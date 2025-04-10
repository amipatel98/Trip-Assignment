import { Component, Input, SimpleChanges } from '@angular/core';
import { Trip } from '../../models/trip.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-display-trip',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './display-trip.component.html',
  styleUrl: './display-trip.component.scss',
})
export class DisplayTripComponent {
  @Input() trips: Trip[] = [];
  levels: any[] = [];

  ngOnChanges() {
    this.assignLevels();
  }

  assignLevels() {
    this.levels = this.trips.map((trip, index, array) => {
      let level = 1;
      let arrow = false;

      if (index > 0) {
        const prevTrip = array[index - 1];

        if (prevTrip.end === trip.start) {
          level = 1;
        } else if (prevTrip.start === trip.start && prevTrip.end === trip.end) {
          level = 2;
        } else {
          arrow = true;
        }
      }

      return {
        start: trip.start.slice(0, 3),
        end: trip.end.slice(0, 3),
        level,
        arrow,
      };
    });
  }
}
