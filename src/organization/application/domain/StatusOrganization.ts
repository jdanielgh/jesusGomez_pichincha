export class StatusOrganization {
    private readonly value: number;

    constructor(value: number) {
        if (!value || value === null) throw new TypeError('status of organization can not be null');
        this.value = value;
    }

    get getValue(): number {
        return this.value;
    }
}
