import {IInventory, ILuckBoosterSettings} from "../../../src/type";
import {RARITY_NAMES} from "../../enum";
import {nextRarity, prevRarity} from "../../helpers";
import {Item} from "../../Item/Item";
import {Booster} from "../base/BoosterBase";

export class LuckyBooster extends Booster {
    replacementChance: number;
    constructor(settings: ILuckBoosterSettings) {
        super(settings);
        this.replacementChance = settings.replacementChance;
    }

    checkReplacementChanceByRarity(): boolean {
        const shiftChance = {
            [RARITY_NAMES.COMMON]: 1,
            [RARITY_NAMES.RARE]: 1,
            [RARITY_NAMES.EPIC]: 10,
            [RARITY_NAMES.LEGENDARY]: 100,
        }
        const randomInt =  Math.floor(Math.random() * 100) + 1; 
        const chance = this.replacementChance * 100;

        return  randomInt < (chance / shiftChance[this.rarity]);
    }

    getBoosterLoot(playerInventory?: IInventory): Item[] {
        let result = [];
        if (this.n1) {
            for (let i = 0; i < this.n1; i++) {
                const haveReplacement = this.checkReplacementChanceByRarity();
                const item = this.getRandomItem(haveReplacement ? nextRarity[this.rarity] : this.rarity)
                result.push(item)
            }
        }
        if (this.n2) {
            for (let i = 0; i < this.n2; i++) {
                const rarity = prevRarity[this.rarity];
                const haveReplacement = this.checkReplacementChanceByRarity()
                const item = this.getRandomItem(haveReplacement ? nextRarity[this.rarity] : rarity)
                result.push(item)
            }
        }
        return result;
    }
}
