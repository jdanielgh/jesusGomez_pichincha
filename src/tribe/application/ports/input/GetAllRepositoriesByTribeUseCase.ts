import { UseCase } from "../../../../commons/UseCase";
import { TribeRepositoryMetricDTO } from "../../../../infraestructure/models/TribeRepositoryMetricDTO";

export interface GetAllRepositoriesByTribeUseCase extends UseCase<number, TribeRepositoryMetricDTO[] | undefined> {

}
