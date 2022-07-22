export class NameTribe {
    private readonly value: string;

    constructor(value: string) {
        if(!!value || value === null) throw TypeError('Name of the tribe can no be null');
        if(value.length > 50) throw TypeError('Name of the tribe can no be longer than 50 characters');
        this.value = value;
    }

    get getValue(): string {
        return this.value;
    }
}
