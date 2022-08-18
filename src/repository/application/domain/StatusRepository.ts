import { StatusRepositoryE } from "../../../shared/constant/repository.constant";
import { StatusRepositoryType } from "../../../shared/types/repository.type";

export class StatusRepository {
    private readonly value: StatusRepositoryType;

    constructor(value: StatusRepositoryType) {
        if (!value || value === null) throw new TypeError('Status repository can not be null');
        if (!StatusRepositoryE[value]) throw new TypeError('Status repository has a invalid value');
        this.value = value;
    }

    get getValue(): StatusRepositoryType {
        return this.value;
    }
}
