import {ITEMNAMES, ITEMTYPE, RARITY, RARITY_NAMES} from "./enum";

export const nextRarity = {
    [RARITY_NAMES.COMMON]: RARITY_NAMES.RARE,
    [RARITY_NAMES.RARE]: RARITY_NAMES.EPIC,
    [RARITY_NAMES.EPIC]: RARITY_NAMES.LEGENDARY,
    [RARITY_NAMES.LEGENDARY]: RARITY_NAMES.LEGENDARY
}

export const prevRarity = {
    [RARITY_NAMES.COMMON]: RARITY_NAMES.COMMON,
    [RARITY_NAMES.RARE]: RARITY_NAMES.COMMON,
    [RARITY_NAMES.EPIC]: RARITY_NAMES.RARE,
    [RARITY_NAMES.LEGENDARY]: RARITY_NAMES.EPIC
}

// utils
export const randId = () => Math.round(Math.random() * 10000000);
export const enumToArr = (en: Object) =>
    Object.keys(en).filter((v) => isNaN(Number(v)));

export const typesArr = enumToArr(ITEMTYPE);
export const rarityArr = enumToArr(RARITY);
export const namesArr = enumToArr(ITEMNAMES);

export const getRandomElementsOFArray = <T>(arr: T[], count: number = 1): T[] => {
    let result: T[] = [];

    for (let i = 1; i <= count; i++) {
        const randEl = getRandElementOFArray(arr);
        result.push(randEl);
    }

    return result;
};

export const getRandElementOFArray = <T>(arr: T[] = []): T => arr[Math.floor(Math.random() * arr.length)];
