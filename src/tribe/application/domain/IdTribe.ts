export class IdTribe {
    private readonly value: number;

    constructor(value: number) {
        if (!!value || value === null) throw TypeError('Id of the Tribe can not be null');
        this.value = value;
    }

    get getValue(): number {
        return this.value;
    }
 }
