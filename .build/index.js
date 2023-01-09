var import_boosters = require("./src/boosters");
var import_enum = require("./src/enum");
let boostersBase = {
  1: new import_boosters.Booster({ rarity: import_enum.RARITY_NAMES.RARE, n1: 3, n2: 2 }),
  2: new import_boosters.Booster({ rarity: import_enum.RARITY_NAMES.LEGENDARY, n1: 1, n2: 3 }),
  3: new import_boosters.LuckyBooster({
    rarity: import_enum.RARITY_NAMES.RARE,
    n1: 3,
    n2: 2,
    replacementChance: 0.1
  }),
  4: new import_boosters.LuckyBooster({ rarity: import_enum.RARITY_NAMES.LEGENDARY, n1: 1, n2: 3, replacementChance: 0.45 }),
  5: new import_boosters.UniformBooster({ rarity: import_enum.RARITY_NAMES.RARE, n1: 3, n2: 2, replacementChance: 0.1 }),
  6: new import_boosters.UniformBooster({ rarity: import_enum.RARITY_NAMES.LEGENDARY, n1: 1, n2: 3, replacementChance: 0.45 })
};
for (const prop in boostersBase) {
  if (boostersBase.hasOwnProperty(prop)) {
    console.log(boostersBase[prop].getBoosterLoot());
  }
}
//# sourceMappingURL=index.js.map
