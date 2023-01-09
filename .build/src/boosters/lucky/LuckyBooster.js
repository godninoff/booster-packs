var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var LuckyBooster_exports = {};
__export(LuckyBooster_exports, {
  LuckyBooster: () => LuckyBooster
});
module.exports = __toCommonJS(LuckyBooster_exports);
var import_enum = require("../../enum");
var import_helpers = require("../../helpers");
var import_BoosterBase = require("../base/BoosterBase");
class LuckyBooster extends import_BoosterBase.Booster {
  constructor(settings) {
    super(settings);
    this.replacementChance = settings.replacementChance;
  }
  checkReplacementChanceByRarity() {
    const shiftChance = {
      [import_enum.RARITY_NAMES.COMMON]: 1,
      [import_enum.RARITY_NAMES.RARE]: 1,
      [import_enum.RARITY_NAMES.EPIC]: 10,
      [import_enum.RARITY_NAMES.LEGENDARY]: 100
    };
    const randomInt = Math.floor(Math.random() * 100) + 1;
    const chance = this.replacementChance * 100;
    return randomInt < chance / shiftChance[this.rarity];
  }
  getBoosterLoot(playerInventory) {
    let result = [];
    if (this.n1) {
      for (let i = 0; i < this.n1; i++) {
        const haveReplacement = this.checkReplacementChanceByRarity();
        const item = this.getRandomItem(haveReplacement ? import_helpers.nextRarity[this.rarity] : this.rarity);
        result.push(item);
      }
    }
    if (this.n2) {
      for (let i = 0; i < this.n2; i++) {
        const rarity = import_helpers.prevRarity[this.rarity];
        const haveReplacement = this.checkReplacementChanceByRarity();
        const item = this.getRandomItem(haveReplacement ? import_helpers.nextRarity[this.rarity] : rarity);
        result.push(item);
      }
    }
    return result;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LuckyBooster
});
//# sourceMappingURL=LuckyBooster.js.map
