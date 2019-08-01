import {Component, Input, OnInit} from '@angular/core';
import {CHARMS, NAILS} from '../mock-data';
import {Nail} from '../nail';
import {tick} from '@angular/core/testing';

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
  calculateFlukenest(): string { // TODO

    if (this.isFlukenest()) { // If flukenest is equipped
      if (this.isVengefulSpirit()) {

        if (this.isDefendersCrest()) {

          if (this.isShamanStone()) { // vengeful spirit + defenders crest + shaman stone
            return 'Can be combined with Defender\'s Crest to release a large toxic fluke that explodes on contact with an enemy, ' +
              'releasing a large toxic cloud.' +
              'Shaman Stone will not affect the damage of Defender\'s Crest + Flukenest nor will affect the amount of time that' +
              ' the cloud lasts but will increase the frequency of the ticks allowing for 29 ticks.' +
              '58–60 total : 2 damages × 29 ticks';
          } else { // vengeful spirit + defenders crest
            return 'Can be combined with Defender\'s Crest to release a large toxic fluke that explodes on contact with an enemy, ' +
              'releasing a large toxic cloud.' +
              '44–46 total : 2/tick';
          }

        } else {

          if (this.isShamanStone()) { // vengeful spirit + shaman stone
            return 'Shaman Stone increases the damage to 5, ' +
              'resulting in a total damage of 45 with Vengeful Spirit. ' +
              'Fluke projectiles are also bigger.' +
              '45 total : 5 × 9 Flukes';
          } else { // Vengeful spirit only
            return '36 total : 4 × 9 Flukes';
          }

        }

      } else if (this.isShadeSoul()) {

        if (this.isDefendersCrest()) {

          if (this.isShamanStone()) { // shade soul + defenders crest + shaman stone
            return 'Can be combined with Defender\'s Crest to release a large toxic fluke that explodes on contact with an enemy, ' +
              'releasing a large toxic cloud. \n' +
              'Shaman Stone will not affect the damage of Defender\'s Crest + Flukenest nor will affect the amount of time that the ' +
              'cloud lasts but will increase the frequency of the ticks allowing for 29 ticks.' +
              '58 total : 4/tick';
          } else { // shade soul + defenders crest
            return 'Can be combined with Defender\'s Crest to release a large toxic fluke that explodes on contact with an enemy, ' +
              'releasing a large toxic cloud. \n' +
              '44 total : 4/tick';
          }

        } else {

          if (this.isShamanStone()) { // shade soul + shaman stone
            return 'Shaman Stone increases the damage to 5, ' +
              'resulting in a total damage of 80 with Shade Soul. ' +
              'Fluke projectiles are also bigger.' +
              '80 total : 5 × 16 Flukes';
          } else { // shade soul
            return '64 total : 4 × 16 Flukes';
          }

        }

      }
    }
  }

  /**
   * return true if gShaman stone is equipped, return false else
   */
  isShamanStone(): boolean {
    return this.selectedCharms.find(x => x.name === 'Shaman Stone');
  }

  calculateShadeSoul(): number {
    if (this.isShamanStone()) {
      return  Math.ceil(30 * 1.33);
    } else {
      return 30;
    }
  }

  calculateVengefulSpirit(): number {
    if (this.isShamanStone()) {
      return  Math.ceil(15 * 1.33);
    } else {
      return 15;
    }
  }

  calculateHowlingWraiths(): number {
    if (this.isShamanStone()) {
      return  Math.ceil(30 * 1.5);
    } else {
      return 30;
    }
  }

  calculateAbyssShriek(): number {
    if (this.isShamanStone()) {
      return  Math.ceil(80 * 1.5);
    } else {
      return 80;
    }
  }

  calculateDesolateDive(): number {
    if (this.isShamanStone()) {
      return  Math.ceil(35 * 1.33);
    } else {
      return 35;
    }
  }

  calculateDescendingDark(): number {
    if (this.isShamanStone()) {
      return  Math.ceil(60 * 1.33);
    } else {
      return 60;
    }
  }


  /**
   * return true if Defender crest if it's equipped, return false else
   */
  isDefendersCrest(): boolean {
    return this.selectedCharms.find(x => x.name === 'Defender\'s Crest');
  }

  /**
   * return damage of Defender's crest
   */
  calculateDefendersCrest(): string {
    return '1 per tick';
  }

  /**
   * return true if glowing womb if it's equipped, return false else
   */
  isGlowingWomb(): boolean {
    return this.selectedCharms.find(x => x.name === 'Glowing Womb');
  }

  /**
   * display the damage of the glowing womb, take into account if defender's crest is equipped
   */
  calculateGlowingWomb(): string {

      if (this.isDefendersCrest()) {
          return '8-9 per fly total:\n' +
        '4+1/tick（4-5ticks）';
    } else {
      return '9 per fly';
    }
  }

  /**
   * display the damage of the glowing womb when furry of the fallen is equuipped, take into account if defender's crest is equipped
   */
  calculateGlowingWomb1hp(): string {
    if (this.isFurryOfTheFallen()) {

      if (this.isDefendersCrest()) {

        return '13-14 per fly total:\n' +
          '9+1/tick（4-5ticks）';

      } else {
        return '14 per fly';
      }

    }
  }


  /**
   * return true if spore shroom is equipped, return false else
   */
  isSporeShroom(): boolean {
    return this.selectedCharms.find(x => x.name === 'Spore Shroom');
  }

  /**
   * display the damage of the spore shroom, take into account if defender's crest is equipped
   */
  calculateSporeShroom(): string {

    if (this.isDefendersCrest()) {
      return '40 total:\n' +
      '2/tick（20ticks）';
    } else {
      return '28 total:\n' +
        '1/tick（28ticks）';
    }
  }

  /**
   * return true ifsharp shadow is equipped, return false else
   */
  isSharpShadow(): boolean {
    return this.selectedCharms.find(x => x.name === 'Sharp Shadow');
  }

  /**
   * display the damage of the sharp shadow
   */
  calculateSharpShadow(): number {

    return this.selectedNail.damage;
  }

  isShadeSoul(): boolean {
    return true;
  }

  isVengefulSpirit(): boolean {
    return false;
  }
}
