import { UseCase } from "../../../../commons/UseCase";
import { TribeDTO } from "../../../../infraestructure/models/TribeDTO";
import { IdTribe } from "../../domain/IdTribe";

export interface GetAllRepositoriesByTribe extends UseCase<IdTribe, TribeDTO> {

}
