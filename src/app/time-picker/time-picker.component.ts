import { Component } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent {
  date: Date = new Date();

  now = new Date();

  constructor() {}

  get diff(): number {
    return (this.date.valueOf() - this.now.valueOf()) / 1000;
  }

  get restDays(): number {
    return Math.floor(Math.abs(this.diff) / 3600 / 24);
  }

  get restHours(): number {
    return Math.floor((Math.abs(this.diff) / 3600) % 24);
  }

  get restMinutes(): number {
    return Math.floor((Math.abs(this.diff) / 60) % 60);
  }

  get restSeconds(): number {
    return Math.floor(Math.abs(this.diff) % 60);
  }

  onDateChanged(event): void {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }
}
