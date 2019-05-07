import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CHARMS} from '../mock-data';
import {Charm} from '../charm';

@Component({
  selector: 'app-charm',
  templateUrl: './charm.component.html',
  styleUrls: ['./charm.component.css']
})
export class CharmComponent implements OnInit {

  charms = CHARMS;
  selectedCharms: Charm[] = []; // The list of charms that we send to charms-equiped component
  selectedCharm: Charm = this.charms[0];

  @Output() selectedCharmsEvent = new EventEmitter<Charm[]>();
  @Input() numberOfNotches: number;

  constructor() { }

  ngOnInit() {
    this.sendSelectedCharms();
  }

  sendSelectedCharms() {
    this.selectedCharmsEvent.emit(this.selectedCharms);
  }

  select(charm: Charm) {
    if (this.selectedCharms.find(x => x.id === charm.id)) { // If the charm is already equipped, we delete it from the list
      const index = this.selectedCharms.indexOf(this.selectedCharms.find(x => x.id === charm.id));
      this.selectedCharms.splice(index, 1);
      this.sendSelectedCharms();

    } else { // If the charm isn't equipped, we add it to the list.

      if (this.numberOfNotches <= this.countNotches()) {
        // we are full we do nothing lol
      } else if (this.countNotches() + charm.notches <= this.numberOfNotches) { // ok trkl on equip

        this.selectedCharms.push(charm);
        this.sendSelectedCharms();
      } else { // Getting overcharmed

        this.selectedCharms.push(charm);
        this.sendSelectedCharms();
      }
    }
    this.selectedCharm = charm;
  }

  countNotches(): number {
    let x = 0;
    for (const charm of this.selectedCharms) {
      x += charm.notches;
    }
    return x;
  }

  resetCharmsList(): void {
    if (!(this.countNotches() < this.numberOfNotches)) { // Need to reset
      // this.selectedCharms = [];
      this.selectedCharms.pop();
      this.sendSelectedCharms();
    }
  }

  getNumberOfNotchesCheat(charm: Charm): number[] {
    return Array(charm.notches);
  }
}
