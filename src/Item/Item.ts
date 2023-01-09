import {IItemSettings} from "../type";

export class Item implements IItemSettings {
    name: string;
    id: number;
    rarity: string;
    itemType: string;
    constructor(settings: IItemSettings) {
        this.name = settings.name;
        this.id = settings.id;
        this.rarity = settings.rarity;
        this.itemType = settings.itemType;
    }
}
