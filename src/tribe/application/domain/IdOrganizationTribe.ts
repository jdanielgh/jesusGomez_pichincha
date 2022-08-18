import { Organization } from "../../../organization/application/domain/Organization";

export class IdOrganizationsTribe {
    private readonly value: Organization;

    constructor(value: Organization) {
        this.value = value;
    }

    get getValue(): Organization {
        return this.value;
    }
}
