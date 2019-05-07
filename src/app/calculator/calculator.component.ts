import {Component, Input, OnInit} from '@angular/core';
import {CHARMS, NAILS} from '../mock-data';
import {NailComponent} from '../nail/nail.component';
import {Nail} from '../nail';
import {Charm} from '../charm';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  selectedNail: Nail = NAILS[0];

  selectedCharms: Charm[] = [];

  numberOfNotches = 0;

  constructor() { }

  ngOnInit() {
  }

  receiveSelectedNail($event) {
    this.selectedNail = $event;
  }

  receiveSelectedCharms($event) {
    this.selectedCharms = $event;
  }

  receiveNumberOfNotches($event) {
    this.numberOfNotches = $event;
  }
}
