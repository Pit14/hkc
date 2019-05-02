import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {log} from 'util';
import {CHARMS} from '../mock-data';
import {checkAndUpdateBinding} from '@angular/core/src/view/util';
import {Charm} from '../charm';
import {Nail} from '../nail';

@Component({
  selector: 'app-charm',
  templateUrl: './charm.component.html',
  styleUrls: ['./charm.component.css']
})
export class CharmComponent implements OnInit {

  charms = CHARMS;
  selectedCharms: Charm[] = [];

  selectedCharm: Charm = this.charms[0]; // = this.charms[0];

  @Output() selectedCharmsEvent = new EventEmitter<Charm[]>();

  numberOfNotches: number;

  constructor() { }

  ngOnInit() {
   // this.selectedCharms.push(this.charms[0]);
    this.sendSelectedCharms();
    this.numberOfNotches = 0;
  }

  sendSelectedCharms() {
     this.selectedCharmsEvent.emit(this.selectedCharms);
  }

  countNotches() {
    let x = 0;
    for (const charm of this.selectedCharms) {
      x += charm.notches;
    }
    this.numberOfNotches = x;
  }

  select(charm: Charm) {
    if (this.selectedCharms.find(x => x.id === charm.id)) { // If the charm is already equipped, we delete it from the list
      const index = this.selectedCharms.indexOf(this.selectedCharms.find(x => x.id === charm.id));
      this.selectedCharms.splice(index, 1);
    } else { // If the charm isn't equipped, we had it to the list.
      this.selectedCharms.push(charm);
    }
    this.selectedCharm = charm;
    this.countNotches();
    this.sendSelectedCharms();
  }
}
