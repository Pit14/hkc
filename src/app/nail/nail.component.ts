import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Nail} from '../nail';
import {Charm} from '../charm';
import {CHARMS, NAILS} from '../mock-data';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'app-nail',
  templateUrl: './nail.component.html',
  styleUrls: ['./nail.component.css']
})
export class NailComponent implements OnInit {

  charms = CHARMS;
  nails = NAILS;

  selectedNail: Nail = this.nails[0];
  // selectedCharm: Charm = this.charms[1];

  @Output() selectedNailEvent = new EventEmitter<Nail>();

  constructor() {  }

  ngOnInit() {  }

  sendSelectedNail() {
    this.selectedNailEvent.emit(this.selectedNail);
  }
  //
  // onChange(nailID) {
  //   // faire une fonction getNailbyId pour faire plus propre !!!
  //   // console.log(this.nails[nailID - 1]);
  //   console.log(this.nails[nailID - 1]);
  //   this.selectedNail = this.nails[nailID - 1];
  //   this.sendSelectedNail();
  // }

}
