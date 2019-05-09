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

  @Input() selectedCharms; // = []; // = this.charms[0];

  constructor() { }

  ngOnInit() {
  }

  /***
   *  Return the nail damage * fragile strength multiplier (1 if not equipped)
   */
  calculateBasicAttack(): number {
    return Math.ceil(this.selectedNail.damage * this.getFragileStrengthMultiplier());
  }

  /**
   * If fury of the fallen is equipped. Handle the fragile strength
   */
  calculateBasicAttack1HP(): number {
    return Math.ceil(this.selectedNail.damage * this.getFragileStrengthMultiplier() *
      this.selectedCharms.find(x => x.name === 'Fury of the Fallen').damageMultiplier);
  }

  calculateCycloneSlashMin(): number {
    return Math.ceil(this.selectedNail.damage * 1.25 * 3);
  }

  calculateCycloneSlashMin1HP(): number {
    if (this.isFurryOfTheFallen()) {
      return Math.ceil(this.selectedNail.damage * 1.25 * 3 * this.selectedCharms.find(x => x.name === 'Fury of the Fallen')
        .damageMultiplier);
    }
  }

  calculateCycloneSlashMax(): number {
    return Math.ceil(this.selectedNail.damage * 1.25 * 7);
  }

  calculateCycloneSlashMax1HP(): number {
    if (this.isFurryOfTheFallen()) {
      return Math.ceil(this.selectedNail.damage * 1.25 * 7 * this.selectedCharms.find(x => x.name === 'Fury of the Fallen')
        .damageMultiplier);
    }
  }

  calculateGreatOrDashSlash(): number {
    return Math.ceil(this.selectedNail.damage * 2.5);
  }

  calculateGreatOrDashSlash1HP(): number {
    return Math.ceil(this.selectedNail.damage * 2.5 * this.selectedCharms.find(x => x.name === 'Fury of the Fallen').damageMultiplier);
  }

  calculateThornsOfAgony(): number {
    return this.selectedNail.damage * 2;
  }

  calculateGrubberflyElegy(): number {
    if (this.isGrubberflyElegy()) { // If grubber fly elegy is equipped
      return Math.ceil( this.selectedNail.damage * this.selectedCharms.find(x => x.name === 'Grubberfly\'s Elegy').damageMultiplier
        * this.getFragileStrengthMultiplier());
    }
  }

  calculateGrubberflyElegy1hp(): number {
    if (this.isGrubberflyElegy()) { // If grubber fly elegy is equipped
      return Math.ceil( this.selectedNail.damage * this.selectedCharms.find(x => x.name === 'Grubberfly\'s Elegy').damageMultiplier
        * this.getFragileStrengthMultiplier() * this.getFurryOfTheFallenMultiplier());
    }
  }

  /**
   * return true if thorns of agony is equipped
   */
  isThornsOfAgony(): boolean {
    return this.selectedCharms.find(x => x.name === 'Thorns of Agony');
  }

  /**
   * return true if furry of the fallen is equipped
   */
  isFurryOfTheFallen(): boolean {
    return this.selectedCharms.find(x => x.name === 'Fury of the Fallen');
  }

  /**
   *  return the damage multiplier of Fury of the Fallen, or 1 if it's not equipped
   */
  getFurryOfTheFallenMultiplier(): number {
    if (this.isFurryOfTheFallen()) { // If fragile Strength is equipped
      return this.selectedCharms.find(x => x.name === 'Fury of the Fallen').damageMultiplier;
    } else {
      return 1;
    }
  }

  /**
   *  return the damage multiplier of fragile strength, or 1 if it's not equipped
   *  don't affect nail art
   */
  getFragileStrengthMultiplier(): number {
    if (this.selectedCharms.find(x => x.name === 'Fragile Strength')) { // If fragile Strength is equipped
      return this.selectedCharms.find(x => x.name === 'Fragile Strength').damageMultiplier;
    } else {
      return 1;
    }
  }

  /**
   * return ttrue if grubber fly if it's equipped, return false else
   */
  isGrubberflyElegy(): boolean {
    return this.selectedCharms.find(x => x.name === 'Grubberfly\'s Elegy');
  }

  /**
   * return true if flukenest if it's equipped, return false else
   */
  isFlukenest(): boolean {
    return this.selectedCharms.find(x => x.name === 'Flukenest');
  }

  /**
   * return damage of Flukenest, to finish when shade soul et vengefull spirit will be finished
   */
  calculateFlukenest(): string {
    let tickDamage = 4;
    const numberOfFlukes = 9;
    if (this.isFlukenest()) { // If grubber fly elegy is equipped
      // if(vengefulSpirit) {
      //   numberOfFlukes = 9;
      // } else if(shadeSoul) {
      //   numberOfFlukes = 16;
      // }
      if (this.isShamanStone()) {
        tickDamage = 5;
      }
    }

    return tickDamage + ' damages * ' + numberOfFlukes + ' flukes = ' + tickDamage * numberOfFlukes;
  }

  /**
   * return true if gShaman stone is equipped, return false else
   */
  isShamanStone(): boolean {
    return this.selectedCharms.find(x => x.name === 'Shaman Stone');
  }

}
