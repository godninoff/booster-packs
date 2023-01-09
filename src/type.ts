import {RARITY_NAMES} from "./enum";
import {Item} from "./Item/Item";

export interface IItemSettings {
    name: string;
    id: number;
    rarity: string;
    itemType: string;
}

// Настройки простого бустерпака
export interface IBoosterSettings {
    rarity: RARITY_NAMES;
    n1: number;
    n2: number;
}

// Настройки бустерпака удачи
export interface ILuckBoosterSettings extends IBoosterSettings {
    replacementChance: number;
}

export interface IInventory {
    [key: number]: number;
}

export interface ItemsBase {
    [ID: number]: Item;
}
