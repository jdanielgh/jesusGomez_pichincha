export class IdRepository {
    private readonly value: number;

    constructor(value: number) {
        if (!value || value === null) throw new TypeError('Id Repository can not be null');
        this.value = value;
    }

    get getValue(): number {
        return this.value;
    }
}
