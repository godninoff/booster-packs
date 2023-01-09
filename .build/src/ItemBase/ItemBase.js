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
var ItemBase_exports = {};
__export(ItemBase_exports, {
  itemsBase: () => itemsBase
});
module.exports = __toCommonJS(ItemBase_exports);
var import_helpers = require("../helpers");
var import_Item = require("../Item/Item");
const getItemBase = () => {
  let itemsBaseId = 1;
  let itemsBase2 = {};
  import_helpers.typesArr.forEach((itemType) => {
    import_helpers.rarityArr.forEach((rarity) => {
      import_helpers.namesArr.forEach((name) => {
        const id = (0, import_helpers.randId)();
        itemsBase2[itemsBaseId] = new import_Item.Item({
          name: `${name.toLowerCase()} ${itemType.toLowerCase()}`,
          id,
          rarity,
          itemType
        });
        itemsBaseId++;
      });
    });
  });
  return itemsBase2;
};
const itemsBase = getItemBase();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  itemsBase
});
//# sourceMappingURL=ItemBase.js.map
