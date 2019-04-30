import {Component, Input, OnInit} from '@angular/core';
import {CHARMS, NAILS} from '../mock-data';
import {Nail} from '../nail';

@Component({
  selector: 'app-damage-table',
  templateUrl: './damage-table.component.html',
  styleUrls: ['./damage-table.component.css']
})
export class DamageTableComponent implements OnInit {

  @Input() selectedNail: Nail;
  charms = CHARMS;

  selectedCharms = this.charms; // = this.charms[0];

  constructor() { }

  ngOnInit() {
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
