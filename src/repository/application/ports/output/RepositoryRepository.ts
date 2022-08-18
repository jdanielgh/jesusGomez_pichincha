import { BaseRepository } from "../../../../commons/BaseRepository";
import { IdTribe } from "../../../../tribe/application/domain/IdTribe";
import { Tribe } from "../../../../tribe/application/domain/Tribe";
import { IdRepository } from "../../domain/IdRepository";
import { Repository } from "../../domain/Repository";

export interface RepositoryRepository extends BaseRepository<Repository, IdRepository> {
    getByIdTribe(tribe: IdTribe): Promise<Repository[]>
}