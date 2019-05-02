import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Nail} from '../nail';
import {Charm} from '../charm';
import {CHARMS} from '../mock-data';

@Component({
  selector: 'app-charms-equiped',
  templateUrl: './charms-equiped.component.html',
  styleUrls: ['./charms-equiped.component.css']
})
export class CharmsEquipedComponent implements OnInit {

  @Input() selectedCharms: Charm[];
  numberOfNotch: number;


  constructor() { }

  ngOnInit() {
    // this.selectedCharms = CHARMS;
    this.numberOfNotch = 0;
  }



}
