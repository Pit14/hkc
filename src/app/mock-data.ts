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
    effect: ['Shows player\'s location on map']
  },
  { id: 2, name: 'Gathering Swarm', notches: 1,
    description: 'A swarm will follow the bearer and gather up any loose Geo.\n' +
      'Useful for those who can\'t bear to leave anything behind, no matter how insignificant.',
    img: '../assets/img/charms/Gathering_Swarm.png',
    effect: ['Collects dropped Geo']
  },
  { id: 3, name: 'Stalwart Shell', notches: 2,
    description: 'Builds resilience. When recovering from damage, the bearer will remain invulnerable for longer.' +
    'Makes it easier to escape from dangerous situations.',
    img: '../assets/img/charms/Stalwart_Shell.png',
    effect: ['Increase invincibility duration after being hit to 1.7 seconds (base-1.3, dif-0.4)\n',
      'Reduces hit recoil (no input time) after being hit to 0.08 seconds (base-0.2, dif-0.12)']
  },
  { id: 4, name: 'Soul Catcher', notches: 2,
    description: 'Used by shamans to draw more SOUL from the world around them.\n' +
      'Increases the amount of SOUL gained when striking an enemy with the nail.',
    img: '../assets/img/charms/Soul_Catcher.png',
    effect: ['Gain +3 additional SOUL with each hit for main Soul Vessel',
    'Gain +2 for reserve Soul Vessels'],
    soulGainedMain: 3,
    soulGainedReserve: 2
  },
  { id: 5, name: 'Shaman Stone', notches: 3,
    description: 'Said to contain the knowledge of past generations of shaman.\n' +
    'Increases the power of spells, dealing more damage to foes.',
    img: '../assets/img/charms/Shaman_Stone.png',
    effect: ['Increases Vengeful Spirit/Shade Soul damage by 33%',
    'Increases Desolate Dive/Descending Dark damage by 33%',
    'Increases Howling Wraiths/Abyss Shriek damage by 50%',
    'Increases size and hitbox of all Spells'],
    shadeSoulDamageMultiplier: 1.33,
    descendingDarkDamageMultiplier: 1.33,
    abyssShriekDamageMultiplier: 1.5
  },
  { id: 6, name: 'Soul Eater', notches: 4,
    description: 'Forgotten shaman artifact, used to draw SOUL from still-living creatures.\n' +
    'Greatly increases the amount of SOUL gained when striking an enemy with the nail.',
    img: '../assets/img/charms/Soul_Eater.png',
    effect: ['Gain +8 additional SOUL with each hit for main Soul Vessel',
      'Gain +6 for reserve Soul Vessels'],
    soulGainedMain: 8,
    soulGainedReserve: 6
  },
  { id: 7, name: 'Dashmaster', notches: 2,
    description: 'Bears the likeness of an eccentric bug known only as \'The Dashmaster\'.\n' +
    'The bearer will be able to dash more often as well as dash downwards.\n' +
    ' Perfect for those who want to move around as quickly as possible.',
    img: '../assets/img/charms/Dashmaster.png',
    effect: ['Reduce the use of Mothwing Cloak/Shade Cloak cooldown by 50%',
      'Allows dashing downwards by holding DOWN']
  },
  { id: 8, name: 'Thorns of Agony', notches: 1,
    description: 'Senses the pain of its bearer and lashes out at the world around them.\n' +
    'When taking damage, sprout thorny vines that damage nearby foes.',
    img: '../assets/img/charms/Thorns_of_Agony.png',
    effect: ['Damages nearby enemies for up to 2x base Nail damage when hit']
  },
  { id: 9, name: 'Fury of the Fallen', notches: 2,
    description: 'Embodies the fury and heroism that comes upon those who are about to die.' +
    'When close to death, the bearer\'s strength will increase.',
    img: '../assets/img/charms/Fury_of_the_Fallen.png',
    effect: ['Increases Nail damage by 75% when on 1 HP. This effect is also applied to Nail Arts'],
    damageMultiplier: 1.75
  },
  { id: 10, name: 'Fragile Heart', notches: 2,
    description: 'Increases the health of the bearer, allowing them to take more damage.' +
    'This charm is fragile, and will break if its bearer is killed.',
    img: '../assets/img/charms/Fragile_Heart.png',
    effect: ['Adds two Masks of health']
  },
  { id: 11, name: 'Fragile Greed', notches: 2,
    description: 'Causes the bearer to find more Geo when defeating enemies.' +
    'This charm is fragile, and will break if its bearer is killed.',
    img: '../assets/img/charms/Fragile_Greed.png',
    effect: ['Enemies drop 20-60% more Geo']
  },
  { id: 12, name: 'Fragile Strength', damageMultiplier: 1.5, notches: 3,
    description: 'Strengthens the bearer, increasing the damage they deal to enemies with their nail.\n' +
      'This charm is fragile, and will break if its bearer is killed.',
    img: '../assets/img/charms/Fragile_Strength.png',
    effect: ['Increases Nail damage by 50% rounded up']
  },
  { id: 13, name: 'Spell Twister', notches: 2,
    description: 'Reflecting the desires of the Soul Sanctum for mastery over SOUL, it improves the bearer\'s ability to cast spells.\n' +
      'Reduces the SOUL cost of casting spells.',
    img: '../assets/img/charms/Spell_Twister.png',
    effect: ['Reduces SOUL cost of Spells to 24 from 33']
  },
  { id: 14, name: 'Steady Body', notches: 1,
    description: 'Keeps its bearer from recoiling backwards when they strike an enemy with a nail.\n' +
      'Allows one to stay steady and keep attacking.',
    img: '../assets/img/charms/Steady_Body.png',
    effect: ['Removes all knockback/recoil from hitting enemies']
  },
  { id: 15, name: 'Heavy Blow', notches: 2,
    description: 'Formed from the nails of fallen warriors.\n' +
    'Increases the force of the bearer`\'s nail, causing enemies to recoil further when hit.',
    img: '../assets/img/charms/Heavy_Blow.png',
    effect: ['Increases Nail attack knockback by 75%',
      'Increases Great Slash and Dash Slash knockback by 100%',
      'Increases Cyclone Slash knockback by 150%',
      'Reduces amount of hits needed to stagger a Boss by 1']
  },
  { id: 16, name: 'Quick Slash', notches: 3,
    description: 'Born from imperfect, discarded nails that have fused together. The nails still long to be wielded.\n' +
    'Allows the bearer to slash much more rapidly with their nail.',
    img: '../assets/img/charms/Quick_Slash.png',
    effect: ['Decreases Attack Duration from 0.36s to 0.25s',
      'Decreases Attack Cooldown from 0.41s to 0.25s',
      'Total time between attacks from .0.77s to 0.5s (54% faster)']
  },
  { id: 17, name: 'Longnail', notches: 2,
    description: 'Increases the range of the bearer\'s nail, allowing them to strike foes from further away.',
    img: '../assets/img/charms/Longnail.png',
    effect: ['Increases nail range by 15%']
  },
  { id: 18, name: 'Mark of Pride', notches: 3,
    description: 'Freely given by the Mantis Tribe to those they respect.\n' +
    'Greatly increases the range of the bearer\'s nail, allowing them to strike foes from further away.',
    img: '../assets/img/charms/Mark_of_Pride.png',
    effect: ['Increases nail range by 25%']
  },
  { id: 19, name: 'Baldur Shell', notches: 2,
    description: 'Protects its bearer with a hard shell while focusing SOUL.\n' +
    'The shell is not indestructible and will shatter if it absorbs too much damage.',
    img: '../assets/img/charms/Baldur_Shell.png',
    effect: ['Block up to 4 hits while using Focus.']
  },
  { id: 20, name: 'Flukenest', notches: 3,
    description: 'Living charm born in the gut of a Flukemarm.\n ' +
      'Transforms the Vengeful Spirit and Shade Soul spells into a horde of volatile baby flukes.',
    img: '../assets/img/charms/Flukenest.png',
    effect: ['Replaces Vengeful Spirit with 9 flukes, and Shade Soul with 16 flukes',
      'Each fluke does 4 damage, resulting in a total damage of 36 with Vengeful Spirit and 64 with Shade Soul']
  },
  { id: 21, name: 'Defender\'s Crest', notches: 1,
    description: 'Unique charm bestowed by the King of Hallownest to his most loyal knight. Scratched and dirty, but still cared for.\n' +
    'Causes the bearer to emit a heroic odour.',
    img: '../assets/img/charms/Defenders_Crest.png',
    effect: ['Spawns toxic clouds that deal 1 damage per tick, the cloud lasts 2.2 seconds and a new one will spawn at the Knight\'s ' +
      'location every 0.2 seconds',
      'Unlocks new interactions with certain NPCs']
  },
  { id: 22, name: 'Glowing Womb', notches: 2,
    description: 'Drains the SOUL of its bearer and uses it to birth hatchlings.\n' +
    'The hatchlings have no desire to eat or live, and will sacrifice themselves to protect their parent.',
    img: '../assets/img/charms/Glowing_Womb.png',
    effect: ['Spawns hatchlings for 8 SOUL each, that deal 9 damage to Enemies on contact, ' +
    'a hatchling spawns every 4 seconds for a total of 4 hatchlings at a time']
  },
  { id: 23, name: 'Quick Focus', notches: 3,
    description: 'A charm containing a crystal lens.\n' +
    'Increases the speed of focusing SOUL, allowing the bearer to heal damage faster.',
    img: '../assets/img/charms/Quick_Focus.png',
    effect: ['Focus casts twice as fas']
  },
  { id: 24, name: 'Deep Focus', notches: 4,
    description: 'Naturally formed within a crystal over a long period. Draws in SOUL from the surrounding air.\n' +
    'The bearer will focus SOUL at a slower rate, but the healing effect will double.',
    img: '../assets/img/charms/Deep_Focus.png',
    effect: ['Focus heals 2 masks of Health while decreasing Focus speed by 65%']
  },
  { id: 25, name: 'Lifeblood Heart', notches: 2,
    description: 'Contains a living core that seeps precious lifeblood.\n' +
    'When resting, the bearer will gain a coating of lifeblood that protects from a modest amount of damage.',
    img: '../assets/img/charms/Lifeblood_Heart.png',
    effect: ['Adds 2 Lifeblood masks when resting']
  },
  { id: 26, name: 'Lifeblood Core', notches: 3,
    description: 'Contains a living core that bleeds precious lifeblood.\n' +
    'When resting, the bearer will gain a coating of lifeblood that protects from a large amount of damage.',
    img: '../assets/img/charms/Lifeblood_Core.png',
    effect: ['Adds 4 Lifeblood masks when resting']
  },
  { id: 27, name: 'Joni\'s Blessing', notches: 4,
    description: 'Blessed by Joni, the kindly heretic. Transfigures vital fluids into blue lifeblood.\n' +
    'The bearer will have a healthier shell and can take more damage, but they will not be able to heal themselves by focusing SOUL.',
    img: '../assets/img/charms/Jonis_Blessing.png',
    effect: ['Increase HP by 40% (rounded down) + 1, all masks become Lifeblood',
      'Causes Lifeseeds to flock to the Knight instead of running away']
  },
  { id: 28, name: 'Grubsong', notches: 1,
    description: 'Contains the gratitude of freed grubs.\n' +
    'Gain SOUL when taking damage.',
    img: '../assets/img/charms/Grubsong.png',
    effect: ['Gain 15 SOUL when taking damage']
  },
  { id: 29, name: 'Grubberfly\'s Elegy', notches: 3,
    description: 'Contains the gratitude of grubs who will move to the next stage of their lives. Imbues weapons with a holy strength.\n' +
    'When the bearer is at full health, they will fire beams of white-hot energy from their nail.',
    img: '../assets/img/charms/Grubberflys_Elegy.png',
    effect: ['When at full HP, Nail attacks shoot a projectile dealing 50% (rounded down) Nail damage per hit.\n' +
      'Damage: 2/4/6/8/10\n' +
      '(Nail upgrades 0/1/2/3/4)']
    , damageMultiplier: 0.5
  },
  { id: 30, name: 'Hiveblood', notches: 4,
    description: 'Golden nugget of the Hive\'s precious hardened nectar.\n' +
      'Heals the bearer\'s wounds over time, allowing them to regain health without focusing SOUL.',
    img: '../assets/img/charms/Hiveblood.png',
    effect: ['Passively heals the last unit of health lost after 12 seconds without taking further damage',
      'Makes the enemies inside The Hive passive']
  },
  { id: 31, name: 'Spore Shroom', notches: 1,
    description: 'Composed of living fungal matter. Scatters spores when exposed to SOUL.\n' +
    'When focusing SOUL, emit a spore cloud that slowly damages enemies.',
    img: '../assets/img/charms/Spore_Shroom.png',
    effect: ['Focus releases a cloud of spores dealing 1 damage per tick. The cloud lasts 4.1 seconds allowing for 27 ticks of damage ' +
    '(There is a 4.25 second cooldown before being able to use Spore Shroom again)',
      'Able to understand the dialogue of Mister Mushroom',
    'Able to read certain Lore Tablets found in Fungal Wastes and one in Kingdom\'s Edge']
  },
  { id: 32, name: 'Sharp Shadow', notches: 2,
    description: 'Contains a forbidden spell that transforms shadows into deadly weapons.\n' +
    'When using Shadow Dash, the bearer\'s body will sharpen and damage enemies.',
    img: '../assets/img/charms/Sharp_Shadow.png',
    effect: ['Damages enemies for 1 x Nail damage when dashing through them',
      'When using Shade Cloak, increases dash length by 39% ' +
      '(Only for the single Shade Cloak dash and not regular Mothwing Cloak "cooldown" dashes)']
  },
  { id: 33, name: 'Shape of Unn', notches: 2,
    description: 'Reveals the form of Unn within the bearer.\n' +
    'While focusing SOUL, the bearer will take on a new shape and can move freely to avoid enemies.',
    img: '../assets/img/charms/Shape_of_Unn.png',
    effect: ['Allows "moving" while focusing']
  },
  { id: 34, name: 'Nailmaster\'s Glory', notches: 1,
    description: 'Contains the passion, skill and regrets of a Nailmaster.\n' +
    'Increases the bearer\'s mastery of Nail Arts, allowing them to focus their power faster and unleash arts sooner.',
    img: '../assets/img/charms/Nailmasters_Glory.png',
    effect: ['Reduces the charge time of Nail Arts to 0.75 seconds (base 1.75, dif -1)']
  },
  { id: 35, name: 'Dream Wielder', notches: 1,
    description: 'Transient charm created for those who wield the Dream Nail and collect Essence.\n' +
    'Allows the bearer to charge the Dream Nail faster and collect more SOUL when striking foes.',
    img: '../assets/img/charms/Dream_Wielder.png',
    effect: ['Gain +33 additional SOUL when hitting enemies with the Dream Nail (33 to 66)',
    'Doubles the likelihood of receiving Essence when killing enemies',
    'Reduces the attack speed of the Dream Nail from 2.4 seconds to 0.9 seconds']
  },
  { id: 36, name: 'Kingsoul', notches: 5,
    description: 'Holy charm symbolising a union between higher beings. ' +
      'The bearer will slowly absorb the limitless SOUL contained within.\n' +
      'Opens the way to a birthplace.',
    img: '../assets/img/charms/Kingsoul.png',
    effect: ['Slowly generates 4 SOUL every 2 seconds',
      'Opens the Birthplace']
  },
  { id: 37, name: 'Void Heart', notches: 0,
    description: 'An emptiness that was hidden within, now unconstrained. Unifies the void under the bearer\'s will.\n' +
      'This charm is a part of its bearer and can not be unequipped.',
    img: '../assets/img/charms/Void_Heart.png',
    effect: ['Unlocks 4 endings',
      'Prevents the non-Void Heart ending for the save file',
    'Renders the Siblings, Void Tendrils and Shade passive',
    'Allows access to the Godmaster Pantheon of Hallownest']
  },
  { id: 38, name: 'Unbreakable Heart', notches: 2,
    description: 'Increases the health of the bearer, allowing them to take more damage.\n' +
    'This charm is unbreakable.',
    img: '../assets/img/charms/Unbreakable_Heart.png',
    effect: ['Adds two masks of health']
  },
  { id: 39, name: 'Unbreakable Greed', notches: 2,
    description: 'Causes the bearer to find more Geo when defeating enemies.\n' +
    'This charm is unbreakable.',
    img: '../assets/img/charms/Unbreakable_Greed.png',
    effect: ['Enemies drop 20-60% more Geo']
  },
  { id: 40, name: 'Unbreakable Strength', notches: 3,
    description: 'Strengthens the bearer, increasing the damage they deal to enemies with their nail.\n' +
    'This charm is unbreakable.',
    img: '../assets/img/charms/Unbreakable_Strength.png',
    effect: ['Increases Nail damage by 50%']
  },
  { id: 41, name: 'Dreamshield', notches: 3,
    description: 'Defensive charm once wielded by a tribe that could shape dreams.\n' +
      'Conjures a shield that follows the bearer and attempts to protect them.',
    img: '../assets/img/charms/Dreamshield.png',
    effect: ['\n' +
    'Conjures a shield that slowly rotates around the Knight\'s position that will block certain projectiles' +
    ' and will deal 1x Nail damage when colliding with an enemy']
  },
  { id: 42, name: 'Weaversong', notches: 2,
    description: 'Silken charm containing a song of farewell, left by the Weavers who departed Hallownest for their old home.\n' +
    'Summons weaverlings to give the lonely bearer some companionship and protection.',
    img: '../assets/img/charms/Weaversong.png',
    effect: ['Summons 3 small Weaverlings that attack enemies for 3 damage per hit.']
  },
  { id: 43, name: 'Sprintmaster', notches: 1,
    description: 'Bears the likeness of a strange bug known only as \'The Sprintmaster\'.\n' +
    'Increases the running speed of the bearer, allowing them to avoid danger or overtake rivals.',
    img: '../assets/img/charms/Sprintmaster.png',
    effect: ['Increases run speed by ~20%\n' +
    '(base 8.3, charm 10.0, dif -1.7)']
  },
  { id: 44, name: 'Carefree Melody', notches: 3,
    description: 'Token commemorating the start of a friendship.\n' +
    'Contains a song of protection that may defend the bearer from damage.',
    img: '../assets/img/charms/Carefree_Melody.png',
    effect: ['Has a chance to block damage that has a chance to activate depending on the amount of stacked hits taken']
  },
  { id: 45, name: 'Grimmchild', notches: 2,
    description: 'Worn by those who take part in the Grimm Troupe\'s Ritual.\n' +
      'The bearer must seek the Grimmkin and collect their flames. Uncollected flames will appear on the bearer\'s map',
    img: '../assets/img/charms/Grimmchild.png',
    effect: ['Marks uncollected flames on the map',
    'Allows access to the Grimmkin',
    'Summons a flying companion that will deal varied amounts of damage depending on the level of the Grimmchild',
    'Allows access to the Grimm and Nightmare King Grimm fights']
  }


];
