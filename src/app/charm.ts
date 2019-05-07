import {log} from 'util';

export class Charm {

  id: number;
  img: string;
  name: string;
  effect: string[];
  notches: number;
  description: string;
  soulGainedMain?: number;
  damageMultiplier?: number;
  soulGainedReserve?: number;
  shadeSoulDamageMultiplier?: number;
  abyssShriekDamageMultiplier?: number;
  descendingDarkDamageMultiplier?: number;
}
