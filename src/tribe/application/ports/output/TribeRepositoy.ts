import { BaseRepository } from "../../../../commons/BaseRepository";
import { IdTribe } from "../../domain/IdTribe";
import { Tribe } from "../../domain/Tribe";

export interface TribeRepository extends BaseRepository<Tribe, IdTribe> {

}
