import {ITEMTYPE, ITEMTYPE_NAMES, RARITY_NAMES} from "../../enum";
import {IBoosterSettings, IInventory} from "../../../src/type";
import {getRandElementOFArray, prevRarity} from "../../helpers";
import {Item} from "../../Item/Item";
import {itemsBase} from "../../ItemBase/ItemBase";

export class Booster {
    rarity: RARITY_NAMES;
    n1: number;
    n2: number;

    constructor(settings: IBoosterSettings) {
        this.rarity = settings.rarity;
        this.n1 = settings.n1;
        this.n2 = settings.n2;
    }

    getRandomItem(itemRarity: RARITY_NAMES, type?: ITEMTYPE_NAMES) {
        const items = Object.values(itemsBase).filter(({rarity, itemType}) => {
            if (type) {
                return itemRarity === rarity && itemType === type
            }
            return itemRarity === rarity
        });
        return getRandElementOFArray(items);
    }
    getBoosterLoot(playerInventory?: IInventory): Item[] {
        let result = [];
        if (this.n1) {
            for (let i = 0; i < this.n1; i++) {
                const item = this.getRandomItem(this.rarity)
                result.push(item)
            }
        }
        if (this.n2) {
            for (let i = 0; i < this.n2; i++) {
                const item = this.getRandomItem(prevRarity[this.rarity])
                result.push(item)
            }
        }
        return result;
    }
}
