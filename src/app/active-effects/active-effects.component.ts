import {Component, Input, OnInit} from '@angular/core';
import {Charm} from '../charm';

@Component({
  selector: 'app-active-effects',
  templateUrl: './active-effects.component.html',
  styleUrls: ['./active-effects.component.css']
})
export class ActiveEffectsComponent implements OnInit {

  @Input() selectedCharms;
  @Input() selectedCharm;
  constructor() { }

  ngOnInit() {
  }

  getNumberOfNotchesCheat(charm: Charm): number[] {
    return Array(charm.notches);
  }

}
