import { StateRepositoryE } from "../../../shared/constant/repository.constant";
import { StateRepositoryType } from "../../../shared/types/repository.type";

export class StateRepository {
    private readonly value: StateRepositoryType;

    constructor(value: StateRepositoryType) {
        if (!value || value === null) throw new TypeError('State repository can not be null');
        if (!StateRepositoryE[value]) throw new TypeError('State repository has an invalid value');
        this.value = value;
    }

    get getValue(): StateRepositoryType {
        return this.value;
    }

}
