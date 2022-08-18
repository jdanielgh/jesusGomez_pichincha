import { StateRepositoryE, StatusRepositoryE } from "../constant/repository.constant";

export type StatusRepositoryType = keyof typeof StatusRepositoryE;
export type StateRepositoryType = keyof typeof StateRepositoryE;
export type VerificationType = {
    repositories: {
        id: number,
        state: number
    }[]
};
