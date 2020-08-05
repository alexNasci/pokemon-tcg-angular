export class ResponsePokemon {
    cards: CardsPokemon[] = [];
}

export class CardsPokemon {
    id: string = '';
    name: string = '';
    imageUrlHiRes: string = '';
    types: string[] = [];
    attacks: Attacks[] = [];
    resistances: Resistances[] = [];
    weaknesses: Weaknesses[] = [];
}

export class Attacks {
    name: string;
    convertedEnergyCost: number;
    damage: number;
    text: string;
}

export class Resistances {
    type: string;
    value: string;
}

export class Weaknesses {
    type: string;
    value: string;
}
