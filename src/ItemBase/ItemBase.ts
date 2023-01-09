import {ItemsBase} from "../type";
import {namesArr, randId, rarityArr, typesArr} from "../helpers";
import {Item} from "../Item/Item";

const getItemBase = (): ItemsBase  => {
    let itemsBaseId = 1;
    let itemsBase: ItemsBase = {};

    typesArr.forEach((itemType) => {
        rarityArr.forEach((rarity) => {
            namesArr.forEach((name) => {
                const id = randId();
                itemsBase[itemsBaseId] = new Item({
                    name: `${name.toLowerCase()} ${itemType.toLowerCase()}`,
                    id,
                    rarity,
                    itemType,
                });
                itemsBaseId++
            });
        });
    });

    return itemsBase;
};

export const itemsBase: ItemsBase = getItemBase();
