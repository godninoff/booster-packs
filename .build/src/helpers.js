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
var helpers_exports = {};
__export(helpers_exports, {
  enumToArr: () => enumToArr,
  getRandElementOFArray: () => getRandElementOFArray,
  getRandomElementsOFArray: () => getRandomElementsOFArray,
  namesArr: () => namesArr,
  nextRarity: () => nextRarity,
  prevRarity: () => prevRarity,
  randId: () => randId,
  rarityArr: () => rarityArr,
  typesArr: () => typesArr
});
module.exports = __toCommonJS(helpers_exports);
var import_enum = require("./enum");
const nextRarity = {
  [import_enum.RARITY_NAMES.COMMON]: import_enum.RARITY_NAMES.RARE,
  [import_enum.RARITY_NAMES.RARE]: import_enum.RARITY_NAMES.EPIC,
  [import_enum.RARITY_NAMES.EPIC]: import_enum.RARITY_NAMES.LEGENDARY,
  [import_enum.RARITY_NAMES.LEGENDARY]: import_enum.RARITY_NAMES.LEGENDARY
};
const prevRarity = {
  [import_enum.RARITY_NAMES.COMMON]: import_enum.RARITY_NAMES.COMMON,
  [import_enum.RARITY_NAMES.RARE]: import_enum.RARITY_NAMES.COMMON,
  [import_enum.RARITY_NAMES.EPIC]: import_enum.RARITY_NAMES.RARE,
  [import_enum.RARITY_NAMES.LEGENDARY]: import_enum.RARITY_NAMES.EPIC
};
const randId = () => Math.round(Math.random() * 1e7);
const enumToArr = (en) => Object.keys(en).filter((v) => isNaN(Number(v)));
const typesArr = enumToArr(import_enum.ITEMTYPE);
const rarityArr = enumToArr(import_enum.RARITY);
const namesArr = enumToArr(import_enum.ITEMNAMES);
const getRandomElementsOFArray = (arr, count = 1) => {
  let result = [];
  for (let i = 1; i <= count; i++) {
    const randEl = getRandElementOFArray(arr);
    result.push(randEl);
  }
  return result;
};
const getRandElementOFArray = (arr = []) => arr[Math.floor(Math.random() * arr.length)];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  enumToArr,
  getRandElementOFArray,
  getRandomElementsOFArray,
  namesArr,
  nextRarity,
  prevRarity,
  randId,
  rarityArr,
  typesArr
});
//# sourceMappingURL=helpers.js.map
