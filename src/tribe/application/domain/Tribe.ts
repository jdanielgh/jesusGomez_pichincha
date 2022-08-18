import { Repository } from "../../../repository/application/domain/Repository";
import { IdTribe } from "./IdTribe";
import { NameTribe } from "./NameTribe";
import { StatusTribe } from "./StatusTribe";

export class Tribe {
    private readonly id: IdTribe;
    private readonly name: NameTribe;
    private readonly status: StatusTribe;
    private readonly repositories?: Repository[];

    constructor(id: IdTribe, name: NameTribe, status: StatusTribe, repositories?: Repository[]) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.repositories = repositories;
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

    get getRepositories(): Repository[] | undefined {
        return this.repositories;
    }
}
