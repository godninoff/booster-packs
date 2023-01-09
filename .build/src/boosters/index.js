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
var boosters_exports = {};
__export(boosters_exports, {
  Booster: () => import_BoosterBase.Booster,
  LuckyBooster: () => import_LuckyBooster.LuckyBooster,
  UniformBooster: () => import_UniformBooster.UniformBooster
});
module.exports = __toCommonJS(boosters_exports);
var import_BoosterBase = require("./base/BoosterBase");
var import_LuckyBooster = require("./lucky/LuckyBooster");
var import_UniformBooster = require("./uniform/UniformBooster");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Booster,
  LuckyBooster,
  UniformBooster
});
//# sourceMappingURL=index.js.map
