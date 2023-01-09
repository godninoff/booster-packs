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
var BoosterBase_exports = {};
__export(BoosterBase_exports, {
  Booster: () => Booster
});
module.exports = __toCommonJS(BoosterBase_exports);
var import_helpers = require("../../helpers");
var import_ItemBase = require("../../ItemBase/ItemBase");
class Booster {
  constructor(settings) {
    this.rarity = settings.rarity;
    this.n1 = settings.n1;
    this.n2 = settings.n2;
  }
  getRandomItem(itemRarity, type) {
    const items = Object.values(import_ItemBase.itemsBase).filter(({ rarity, itemType }) => {
      if (type) {
        return itemRarity === rarity && itemType === type;
      }
      return itemRarity === rarity;
    });
    return (0, import_helpers.getRandElementOFArray)(items);
  }
  getBoosterLoot(playerInventory) {
    let result = [];
    if (this.n1) {
      for (let i = 0; i < this.n1; i++) {
        const item = this.getRandomItem(this.rarity);
        result.push(item);
      }
    }
    if (this.n2) {
      for (let i = 0; i < this.n2; i++) {
        const item = this.getRandomItem(import_helpers.prevRarity[this.rarity]);
        result.push(item);
      }
    }
    return result;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Booster
});
//# sourceMappingURL=BoosterBase.js.map
