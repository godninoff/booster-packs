import { Booster, LuckyBooster, UniformBooster } from "./src/boosters";
import { RARITY_NAMES } from "./src/enum";

let boostersBase = {
  1: new Booster({ rarity: RARITY_NAMES.RARE, n1: 3, n2: 2 }),
  2: new Booster({ rarity: RARITY_NAMES.LEGENDARY, n1: 1, n2: 3 }),
  3: new LuckyBooster({
    rarity: RARITY_NAMES.RARE,
    n1: 3,
    n2: 2,
    replacementChance: 0.1,
  }),
  4: new LuckyBooster({ rarity: RARITY_NAMES.LEGENDARY, n1: 1, n2: 3, replacementChance: 0.45, }),
  5: new UniformBooster({ rarity: RARITY_NAMES.RARE, n1: 3, n2: 2, replacementChance: 0.1, }),
  6: new UniformBooster({ rarity: RARITY_NAMES.LEGENDARY, n1: 1, n2: 3, replacementChance: 0.45, }),
}

for (const prop in boostersBase) {
  if( boostersBase.hasOwnProperty( prop ) ) {
    console.log(boostersBase[prop].getBoosterLoot());
  }
}