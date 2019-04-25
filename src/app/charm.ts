import {log} from 'util';

export class Charm {

  id: number;
  name: string;
  damageMultiplier?: number;
  img: string;
  effect: string;
  notches: number;
  description: string;
  soulGainedMain?: number;
  soulGainedReserve?: number;
  shadeSoulDamageMultiplier?: number;
  descendingDarkDamageMultiplier?: number;
  abyssShriekDamageMultiplier?: number;
}
