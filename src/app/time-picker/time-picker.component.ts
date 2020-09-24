import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent implements OnInit {
  @Input() date: Date = new Date();
  now = new Date();

  get diff(): number {
    return this.date.valueOf() - this.now.valueOf();
  }

  constructor() {}

  ngOnInit(): void {}

  get restDays(): number {
    return Math.floor(Math.abs(this.diff) / 1000 / 3600 / 24);
  }

  get restHours(): number {
    return Math.floor(Math.abs(this.diff) / 1000 / 3600);
  }

  get restMinutes(): number {
    return Math.floor(Math.abs(this.diff) / 1000 / 60);
  }
}
