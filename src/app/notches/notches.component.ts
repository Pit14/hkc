import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-notches',
  templateUrl: './notches.component.html',
  styleUrls: ['./notches.component.css']
})
export class NotchesComponent implements OnInit {

  numberOfNotches: number;
  maxNotches: number;
  minNotches: number;

  @Output() NumberOfNotchesEvent = new EventEmitter<number>();
  @Output() myEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.numberOfNotches = 3;
    this.maxNotches = 11;
    this.minNotches = 3;
    this.sendNumberOfNotches();
  }

  addNotch(): void {
    if (this.numberOfNotches < this.maxNotches) {
      this.numberOfNotches ++;
    }
    this.sendNumberOfNotches();
  }

  substractNotch(): void {
    if (this.numberOfNotches > this.minNotches) {
      this.numberOfNotches --;
      this.sendNumberOfNotches();
      this.myEvent.emit(null);
    }
  }

  sendNumberOfNotches() {
    this.NumberOfNotchesEvent.emit(this.numberOfNotches);
  }

}
