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

  // @Input() charm: Charm;

  charms = CHARMS;
  selectedCharms: Charm[] = [];

  // ; // this.charms[0];

  selectedCharm: Charm = this.charms[0]; // = this.charms[0];

  @Output() selectedEvent = new EventEmitter<Charm[]>();


  constructor() { }

  ngOnInit() {
   // this.selectedCharms.push(this.charms[0]);
    this.sendSelectedCharms();
  }

  sendSelectedCharms() {
     this.selectedEvent.emit(this.selectedCharms);
  }

  onSelect(charm: Charm) {
    this.selectedCharm = charm;
    this.selectedCharms.push(charm);
    this.sendSelectedCharms();
  }
}
