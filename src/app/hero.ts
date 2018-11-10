export class Hero {
    id: number;
    name: string;
    bio: string;
    age: number;
    traits: Trait[];
}

export class Trait {
    trait: string;
}

export class TraitInput {
    input: Trait;
}