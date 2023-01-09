import {LuckyBooster} from "../lucky/LuckyBooster";
import {IInventory, ILuckBoosterSettings} from "../../../src/type";
import {Item} from "../../Item/Item";
import {nextRarity, prevRarity} from "../../helpers";
import {ITEMTYPE_NAMES} from "../../enum";

export class UniformBooster extends LuckyBooster {
    itemsSet = {
        [ITEMTYPE_NAMES.HELMET]: false, 
        [ITEMTYPE_NAMES.ARMOR]: false, 
        [ITEMTYPE_NAMES.WEAPON]: false, 
        [ITEMTYPE_NAMES.SHIELD]: false  
    };
    minimumItems: number = 4;

    constructor(settings: ILuckBoosterSettings) {
        super(settings);

        if (this.n1 + this.n2 < this.minimumItems) {
            throw new Error(`UniformBooster requires ${this.minimumItems} items minimum`)
        }
    }

    private get haveAllItems() {
        return Object.values(this.itemsSet).every(v => v); 
    }
  
    getBoosterLoot(playerInventory?: IInventory): Item[] {
        let result = [];
        if (this.n1) {
            for (let i = 0; i < this.n1; i++) {
                const haveReplacement = this.checkReplacementChanceByRarity();
                const rarity = haveReplacement ? nextRarity[this.rarity] : this.rarity;
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
                const haveReplacement = this.checkReplacementChanceByRarity()
                const rarity = haveReplacement ? nextRarity[this.rarity] : prevRarity[this.rarity];
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
