import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-active-effects',
  templateUrl: './active-effects.component.html',
  styleUrls: ['./active-effects.component.css']
})
export class ActiveEffectsComponent implements OnInit {

  @Input() selectedCharms;
  constructor() { }

  ngOnInit() {
  }

}
