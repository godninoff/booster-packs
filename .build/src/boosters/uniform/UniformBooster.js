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
var UniformBooster_exports = {};
__export(UniformBooster_exports, {
  UniformBooster: () => UniformBooster
});
module.exports = __toCommonJS(UniformBooster_exports);
var import_LuckyBooster = require("../lucky/LuckyBooster");
var import_helpers = require("../../helpers");
var import_enum = require("../../enum");
class UniformBooster extends import_LuckyBooster.LuckyBooster {
  constructor(settings) {
    super(settings);
    this.itemsSet = {
      [import_enum.ITEMTYPE_NAMES.HELMET]: false,
      [import_enum.ITEMTYPE_NAMES.ARMOR]: false,
      [import_enum.ITEMTYPE_NAMES.WEAPON]: false,
      [import_enum.ITEMTYPE_NAMES.SHIELD]: false
    };
    this.minimumItems = 4;
    if (this.n1 + this.n2 < this.minimumItems) {
      throw new Error(`UniformBooster requires ${this.minimumItems} items minimum`);
    }
  }
  get haveAllItems() {
    return Object.values(this.itemsSet).every((v) => v);
  }
  getBoosterLoot(playerInventory) {
    let result = [];
    if (this.n1) {
      for (let i = 0; i < this.n1; i++) {
        const haveReplacement = this.checkReplacementChanceByRarity();
        const rarity = haveReplacement ? import_helpers.nextRarity[this.rarity] : this.rarity;
        let type = null;
        if (!this.haveAllItems) {
          Object.entries(this.itemsSet).forEach(([key, value]) => {
            if (!value) {
              this.itemsSet[key] = true;
              type = key;
            }
          });
        }
        const item = this.getRandomItem(rarity, type);
        result.push(item);
      }
    }
    if (this.n2) {
      for (let i = 0; i < this.n2; i++) {
        const haveReplacement = this.checkReplacementChanceByRarity();
        const rarity = haveReplacement ? import_helpers.nextRarity[this.rarity] : import_helpers.prevRarity[this.rarity];
        let type = null;
        if (!this.haveAllItems) {
          Object.entries(this.itemsSet).forEach(([key, value]) => {
            if (!value) {
              this.itemsSet[key] = true;
              type = key;
            }
          });
        }
        const item = this.getRandomItem(rarity, type);
        result.push(item);
      }
    }
    return result;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UniformBooster
});
//# sourceMappingURL=UniformBooster.js.map
