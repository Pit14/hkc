import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Nail} from '../nail';
import {CHARMS, NAILS} from '../mock-data';

@Component({
  selector: 'app-nail',
  templateUrl: './nail.component.html',
  styleUrls: ['./nail.component.css']
})
export class NailComponent implements OnInit {

  charms = CHARMS;
  nails = NAILS;

  selectedNail: Nail = this.nails[0];

  @Output() selectedNailEvent = new EventEmitter<Nail>();

  constructor() {  }

  ngOnInit() {  }

  sendSelectedNail() {
    this.selectedNailEvent.emit(this.selectedNail);
  }

}
