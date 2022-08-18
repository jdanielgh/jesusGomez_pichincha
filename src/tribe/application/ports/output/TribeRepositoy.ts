import { BaseRepository } from "../../../../commons/BaseRepository";
import { NameOrganization } from "../../../../organization/application/domain/NameOrganization";
import { IdTribe } from "../../domain/IdTribe";
import { Tribe } from "../../domain/Tribe";

export interface TribeRepository extends BaseRepository<Tribe, IdTribe> {
    getAllRepositoriesByTribe(idTribe: IdTribe): Promise<[Tribe, NameOrganization]>;
}
