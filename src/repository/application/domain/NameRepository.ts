export class NameRepository {
    private readonly value: string;

    constructor(value: string) {
        if(!value || value === null) throw new TypeError('Name of repository can not be null');
        if(value.length > 50) throw new TypeError('Name of repository can not be longer than 50 characters');

        this.value = value;
    }

    get getValue(): string {
        return this.value;
    }
}
