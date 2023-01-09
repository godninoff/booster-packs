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
var enum_exports = {};
__export(enum_exports, {
  ITEMNAMES: () => ITEMNAMES,
  ITEMTYPE: () => ITEMTYPE,
  ITEMTYPE_NAMES: () => ITEMTYPE_NAMES,
  RARITY: () => RARITY,
  RARITY_NAMES: () => RARITY_NAMES
});
module.exports = __toCommonJS(enum_exports);
var RARITY = /* @__PURE__ */ ((RARITY2) => {
  RARITY2[RARITY2["COMMON"] = 0] = "COMMON";
  RARITY2[RARITY2["RARE"] = 1] = "RARE";
  RARITY2[RARITY2["EPIC"] = 2] = "EPIC";
  RARITY2[RARITY2["LEGENDARY"] = 3] = "LEGENDARY";
  return RARITY2;
})(RARITY || {});
var RARITY_NAMES = /* @__PURE__ */ ((RARITY_NAMES2) => {
  RARITY_NAMES2["COMMON"] = "COMMON";
  RARITY_NAMES2["RARE"] = "RARE";
  RARITY_NAMES2["EPIC"] = "EPIC";
  RARITY_NAMES2["LEGENDARY"] = "LEGENDARY";
  return RARITY_NAMES2;
})(RARITY_NAMES || {});
var ITEMTYPE_NAMES = /* @__PURE__ */ ((ITEMTYPE_NAMES2) => {
  ITEMTYPE_NAMES2["HELMET"] = "HELMET";
  ITEMTYPE_NAMES2["WEAPON"] = "WEAPON";
  ITEMTYPE_NAMES2["SHIELD"] = "SHIELD";
  ITEMTYPE_NAMES2["ARMOR"] = "ARMOR";
  return ITEMTYPE_NAMES2;
})(ITEMTYPE_NAMES || {});
var ITEMTYPE = /* @__PURE__ */ ((ITEMTYPE2) => {
  ITEMTYPE2[ITEMTYPE2["HELMET"] = 0] = "HELMET";
  ITEMTYPE2[ITEMTYPE2["WEAPON"] = 1] = "WEAPON";
  ITEMTYPE2[ITEMTYPE2["SHIELD"] = 2] = "SHIELD";
  ITEMTYPE2[ITEMTYPE2["ARMOR"] = 3] = "ARMOR";
  return ITEMTYPE2;
})(ITEMTYPE || {});
var ITEMNAMES = /* @__PURE__ */ ((ITEMNAMES2) => {
  ITEMNAMES2[ITEMNAMES2["DARK"] = 0] = "DARK";
  ITEMNAMES2[ITEMNAMES2["SHINY"] = 1] = "SHINY";
  return ITEMNAMES2;
})(ITEMNAMES || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ITEMNAMES,
  ITEMTYPE,
  ITEMTYPE_NAMES,
  RARITY,
  RARITY_NAMES
});
//# sourceMappingURL=enum.js.map
