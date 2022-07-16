import { IdOrganization } from "./idOrganization";
import { NameOrganization } from "./NameOrganization";
import { StatusOrganization } from "./StatusOrganization";

export class Organization {
    private readonly id:     IdOrganization;
    private readonly name:   NameOrganization;
    private readonly status: StatusOrganization;

    constructor(id: IdOrganization, name: NameOrganization, status: StatusOrganization) {
        this.id = id;
        this.name = name;
        this.status = status;
    }

    get getId(): IdOrganization {
        return this.id;
    }

    get getName(): NameOrganization {
        return this.name;
    }

    get getStatus(): StatusOrganization {
        return this.status;
    }

}


