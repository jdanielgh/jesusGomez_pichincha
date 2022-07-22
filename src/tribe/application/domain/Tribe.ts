import { IdOrganizationTribe } from "./IdOrganizationTribe";
import { IdTribe } from "./IdTribe";
import { NameTribe } from "./NameTribe";
import { StatusTribe } from "./StatusTribe";

export class Tribe {
    private readonly id: IdTribe;
    private readonly name: NameTribe;
    private readonly status: StatusTribe;
    private readonly idOrganization: IdOrganizationTribe;

    constructor(id: IdTribe, name: NameTribe, status: StatusTribe, idOrganization: IdOrganizationTribe) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.idOrganization = idOrganization;
    }

    get getId(): IdTribe {
        return this.id;
    }

    get getName(): NameTribe {
        return this.name;
    }

    get getStatus(): StatusTribe {
        return this.status;
    }

    get getIdOrganization(): IdOrganizationTribe {
        return this.idOrganization;
    }
}
