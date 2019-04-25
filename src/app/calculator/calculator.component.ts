import {Component, Input, OnInit} from '@angular/core';
import {CHARMS, NAILS} from '../mock-data';
import {NailComponent} from '../nail/nail.component';
import {Nail} from '../nail';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  nails = NAILS;
  charms = CHARMS;

  selectedNail = this.nails[0];
  selectedCharms; // = this.charms[0];

  constructor() { }

  ngOnInit() {
  }

  receiveSelectedNail($event) {
    this.selectedNail = $event;
  }

  receiveSelectedCharms($event) {
    this.selectedCharms = $event;
  }

  /***
   *  Return the nail damage * all damage multiplier form the charm list.
   */
  calculateBasicAttack(): number {
    if (this.selectedCharms.length > 0) { // If there're charms

        let finalDamageMultiplier = 1;

        for (const charm of this.selectedCharms) { // we iterate every charms

          if (charm.damageMultiplier > 0) { // if an equipped charm has a damage multiplier

            finalDamageMultiplier *= charm.damageMultiplier;
          }
        }

        return this.selectedNail.damage * finalDamageMultiplier;

    } else {
      return this.selectedNail.damage;
    }
  }

  calculateCycloneSlashMin(): number {
    return this.selectedNail.damage * 1.25 * 3;
  }

  calculateCycloneSlashMax(): number {
    return this.selectedNail.damage * 1.25 * 7;
  }

  calculateGreatOrDashSlash(): number {
   return this.selectedNail.damage * 2.5;
  }

  calculateThornsOfAgony(): number {
    return this.selectedNail.damage * 2;
  }

  calculateGrubberflyElegy(): number {
    return this.selectedNail.damage * 0.5;
  }
}
