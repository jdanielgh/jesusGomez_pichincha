import { Tribe } from "../../../tribe/application/domain/Tribe";
import { IdOrganization } from "./idOrganization";
import { NameOrganization } from "./NameOrganization";
import { StatusOrganization } from "./StatusOrganization";
import { TribesOrganization } from "./TribesOrganization";

export class Organization {
    private readonly id:     IdOrganization;
    private readonly name:   NameOrganization;
    private readonly status: StatusOrganization;
    private readonly tribes?: TribesOrganization;

    constructor(id: IdOrganization, name: NameOrganization, status: StatusOrganization, tribes?: TribesOrganization) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.tribes = tribes;
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

    get getTribes(): TribesOrganization | undefined {
        return this.tribes;
    }

}
