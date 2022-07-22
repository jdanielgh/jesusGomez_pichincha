export class IdOrganizationTribe {
    private readonly value: number;

    constructor(value: number) {
        if(!!value || value === null) throw new TypeError('idOrganization can not be null');
        this.value = value;
    }

    get getValue(): number {
        return this.value;
    }
}
