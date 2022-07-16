export class NameOrganization {
    private readonly value: string;

    constructor(value: string) {
        if (!value || value === null) throw new TypeError('Name of Organization can not be null');
        if (value.length > 50) throw new TypeError('Name of organization can no be longer than 50 characters');
        this.value = value;
    }

    get getValue(): string {
        return this.value;
    }
}
