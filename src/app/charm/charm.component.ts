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
  @Output() selectedCharmEvent = new EventEmitter<Charm>();
  @Input() numberOfNotches: number;

  constructor() { }

  ngOnInit() {
    this.sendSelectedCharms();
  }

  sendSelectedCharms() {
    this.selectedCharmsEvent.emit(this.selectedCharms);
  }

  sendSelectedCharm() {
    this.selectedCharmEvent.emit(this.selectedCharm);
  }

  /**
   * add a new charme to the list of equipped charms
   * @param charm the charm we just clicked on
   */
  select(charm: Charm) {
    if (this.selectedCharms.find(x => x.id === charm.id)) { // If the charm is already equipped, we delete it from the list
      const index = this.selectedCharms.indexOf(this.selectedCharms.find(x => x.id === charm.id));
      this.selectedCharms.splice(index, 1);
      this.sendSelectedCharms();

    } else { // If the charm isn't equipped, we add it to the list.

      if (this.numberOfNotches <= this.countNotches()) {
        // we are full we do nothing lol
      } else if (this.countNotches() + charm.notches <= this.numberOfNotches) { // ok trkl on equip

        this.checkFragileUnbreakable(charm);

        this.selectedCharms.push(charm);
        this.sendSelectedCharms();

      } else { // Getting overcharmed

        this.selectedCharms.push(charm);
        this.sendSelectedCharms();
      }
    }
    this.selectedCharm = charm;
    this.sendSelectedCharm();
  }

  /**
   * If we got an unbrealable or fragile charm, we deactivate the opposite if equipped, as we can't equipped simultaneously a fragile and
   * an unbreakable charm.
   * @param charm the charm we just clicked on
   */
  checkFragileUnbreakable(charm: Charm) {
    if (charm.name === 'Unbreakable Strength' && this.selectedCharms.find(x => x.name === 'Fragile Strength')) {
      const index = this.selectedCharms.indexOf(this.selectedCharms.find(x => x.name === 'Fragile Strength'));
      this.selectedCharms.splice(index, 1);
    } else if (charm.name === 'Fragile Strength' && this.selectedCharms.find(x => x.name === 'Unbreakable Strength')) {
      const index = this.selectedCharms.indexOf(this.selectedCharms.find(x => x.name === 'Unbreakable Strength'));
      this.selectedCharms.splice(index, 1);
    } else if (charm.name === 'Unbreakable Greed' && this.selectedCharms.find(x => x.name === 'Fragile Greed')) {
      const index = this.selectedCharms.indexOf(this.selectedCharms.find(x => x.name === 'Fragile Greed'));
      this.selectedCharms.splice(index, 1);
    } else if (charm.name === 'Fragile Greed' && this.selectedCharms.find(x => x.name === 'Unbreakable Greed')) {
      const index = this.selectedCharms.indexOf(this.selectedCharms.find(x => x.name === 'Unbreakable Greed'));
      this.selectedCharms.splice(index, 1);
    } else if (charm.name === 'Unbreakable Heart' && this.selectedCharms.find(x => x.name === 'Fragile Heart')) {
      const index = this.selectedCharms.indexOf(this.selectedCharms.find(x => x.name === 'Fragile Heart'));
      this.selectedCharms.splice(index, 1);
    } else if (charm.name === 'Fragile Heart' && this.selectedCharms.find(x => x.name === 'Unbreakable Heart')) {
      const index = this.selectedCharms.indexOf(this.selectedCharms.find(x => x.name === 'Unbreakable Heart'));
      this.selectedCharms.splice(index, 1);
    }
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

  isSelected(c: Charm): boolean {
   if (this.selectedCharms.find(x => x.id === c.id) === undefined) {
     return false;
   } else {
     return true;
   }
  }
}
