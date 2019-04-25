import { Nail } from './nail';
import { Charm } from './charm';

export const NAILS: Nail[] = [
  { id: 1, name: 'Old Nail (Default)', damage: 5 , img: '../assets/img/nails/1.png' },
  { id: 2, name: 'Sharpened Nail (+1)', damage: 9 , img: '../assets/img/nails/2.png' },
  { id: 3, name: 'Channelled Nail (+2)', damage: 13 , img: '../assets/img/nails/3.png' },
  { id: 4, name: 'Coiled Nail (+3)', damage: 17 , img: '../assets/img/nails/4.png' },
  { id: 5, name: 'Pure Nail (+4)', damage: 21 , img: '../assets/img/nails/5.png' }

];


export const CHARMS: Charm[] = [
  { id: 1, name: 'Wayward Compass', notches: 1,
    description: 'Whispers its location to the bearer whenever a map is open, allowing wanderers to pinpoint their current location.',
    img: '../assets/img/charms/Wayward_Compass.png',
    effect: 'Shows player\'s location on map'
  },
  { id: 2, name: 'Gathering Swarm', notches: 1,
    description: 'A swarm will follow the bearer and gather up any loose Geo.\n' +
      'Useful for those who can\'t bear to leave anything behind, no matter how insignificant.',
    img: '../assets/img/charms/Gathering_Swarm.png',
    effect: 'Collects dropped Geo'
  },
  { id: 3, name: 'Stalwart Shell', notches: 2,
    description: 'Builds resilience. When recovering from damage, the bearer will remain invulnerable for longer.' +
    'Makes it easier to escape from dangerous situations.',
    img: '../assets/img/charms/Stalwart_Shell.png',
    effect: 'Increase invincibility duration after being hit to 1.7 seconds (base-1.3, dif-0.4).\n' +
      'Reduces hit recoil (no input time) after being hit to 0.08 seconds (base-0.2, dif-0.12)'
  },
  { id: 4, name: 'Soul Catcher', notches: 2,
    description: 'Used by shamans to draw more SOUL from the world around them.\n' +
      'Increases the amount of SOUL gained when striking an enemy with the nail.',
    img: '../assets/img/charms/Soul_Catcher.png',
    effect: 'Gain +3 additional SOUL with each hit for main Soul Vessel. \n' +
    'Gain +2 for reserve Soul Vessels',
    soulGainedMain: 3,
    soulGainedReserve: 2
  },
  { id: 5, name: 'Shaman Stone', notches: 3,
    description: 'Said to contain the knowledge of past generations of shaman.\n' +
    'Increases the power of spells, dealing more damage to foes.',
    img: '../assets/img/charms/Shaman_Stone.png',
    effect: 'Increases Vengeful Spirit/Shade Soul damage by 33%\n' +
    'Increases Desolate Dive/Descending Dark damage by 33%\n' +
    'Increases Howling Wraiths/Abyss Shriek damage by 50%\n' +
    'Increases size and hitbox of all Spells',
    shadeSoulDamageMultiplier: 1.33,
    descendingDarkDamageMultiplier: 1.33,
    abyssShriekDamageMultiplier: 1.5
  },
  { id: 6, name: 'Soul Eater', notches: 4,
    description: 'Forgotten shaman artifact, used to draw SOUL from still-living creatures.\n' +
    'Greatly increases the amount of SOUL gained when striking an enemy with the nail.',
    img: '../assets/img/charms/Soul_Eater.png',
    effect: 'Gain +8 additional SOUL with each hit for main Soul Vessel\n' +
      'Gain +6 for reserve Soul Vessels',
    soulGainedMain: 8,
    soulGainedReserve: 6
  },
  { id: 7, name: 'Dashmaster', notches: 2,
    description: 'Bears the likeness of an eccentric bug known only as \'The Dashmaster\'.\n' +
    'The bearer will be able to dash more often as well as dash downwards.\n' +
    ' Perfect for those who want to move around as quickly as possible.',
    img: '../assets/img/charms/Dashmaster.png',
    effect: 'Reduce the use of Mothwing Cloak/Shade Cloak cooldown by 50%\n' +
      'Allows dashing downwards by holding DOWN'
  },
  { id: 8, name: 'Thorns of Agony', notches: 1,
    description: 'Senses the pain of its bearer and lashes out at the world around them.\n' +
    'When taking damage, sprout thorny vines that damage nearby foes.',
    img: '../assets/img/charms/Thorns_of_Agony.png',
    effect: 'Damages nearby enemies for up to 2x base Nail damage when hit'
  },
  { id: 9, name: 'Fury of the Fallen', notches: 2,
    description: 'Embodies the fury and heroism that comes upon those who are about to die.' +
    'When close to death, the bearer\'s strength will increase.',
    img: '../assets/img/charms/Fury_of_the_Fallen.png',
    effect: 'Increases Nail damage by 75% when on 1 HP\n' +
      'This effect is also applied to Nail Arts'
  },
  { id: 10, name: 'Fragile Heart', notches: 2,
    description: 'Increases the health of the bearer, allowing them to take more damage.' +
    'This charm is fragile, and will break if its bearer is killed.',
    img: '../assets/img/charms/Fragile_Heart.png',
    effect: 'Adds two Masks of health'
  },
  { id: 11, name: 'Fragile Greed', notches: 2,
    description: 'Causes the bearer to find more Geo when defeating enemies.' +
    'This charm is fragile, and will break if its bearer is killed.',
    img: '../assets/img/charms/Fragile_Greed.png',
    effect: 'Enemies drop 20-60% more Geo'
  },
  { id: 12, name: 'Fragile Strength', damageMultiplier: 1.5, notches: 3,
    description: 'Strengthens the bearer, increasing the damage they deal to enemies with their nail.\n' +
      'This charm is fragile, and will break if its bearer is killed.',
    img: '../assets/img/charms/Fragile_Strength.png',
    effect: 'Increases Nail damage by 50% rounded up'
  },
  { id: 13, name: 'Spell Twister', notches: 2,
    description: 'Reflecting the desires of the Soul Sanctum for mastery over SOUL, it improves the bearer\'s ability to cast spells.\n' +
    'Reduces the SOUL cost of casting spells.',
    img: '../assets/img/charms/Spell_Twister.png',
    effect: 'Reduces SOUL cost of Spells to 24 from 33.'
  }

];
