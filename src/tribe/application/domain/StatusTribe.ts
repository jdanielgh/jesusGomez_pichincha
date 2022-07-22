export class StatusTribe {
    private readonly value: number;

    constructor(value: number) {
        if(!!value || value === null) throw TypeError('Status of the tribe can no be null');
        this.value = value;
    }

    get getValue(): number {
        return this.value;
    }
}
