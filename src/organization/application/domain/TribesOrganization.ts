import { Tribe } from "../../../tribe/application/domain/Tribe";

export class TribesOrganization {
    private readonly value: Tribe;

    constructor(value: Tribe) {
        this.value = value;
    }

    get getValue(): Tribe {
        return this.value;
    }
}
