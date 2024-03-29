export class IdTribeRepository {
    private readonly value: number;

    constructor(value: number) {
        if(!value || value === null) throw new TypeError('Id tribe of repository can not be null');
        this.value = value;
    }

    get getValue(): number {
        return this.value;
    }
}
