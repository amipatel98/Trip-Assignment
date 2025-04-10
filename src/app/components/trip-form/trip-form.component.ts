import { Component, EventEmitter, Output } from '@angular/core';
import { Trip } from '../../models/trip.model';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-trip-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './trip-form.component.html',
  styleUrl: './trip-form.component.scss',
})
export class TripFormComponent {
  @Output() tripAdd = new EventEmitter<Trip>();

  tripForm = new FormGroup({
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
  });

  addTrips() {
    if (this.tripForm.valid) {
      this.tripAdd.emit(this.tripForm.value as Trip);
      this.tripForm.reset();
    }
  }
}
