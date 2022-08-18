export class CreateTimeRepository {
    private readonly value: Date;

    constructor(value: Date) {
        if (!value || value === null) throw new TypeError('Create time of repository can not be null');
        this.value = value;
    }

    get getValue(): Date {
        return this.value;
    }
}
