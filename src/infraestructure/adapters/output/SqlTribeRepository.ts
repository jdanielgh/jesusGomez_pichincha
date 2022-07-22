import { DataSource, Repository } from "typeorm";
import { IdTribe } from "../../../tribe/application/domain/IdTribe";
import { Tribe } from "../../../tribe/application/domain/Tribe";
import { TribeRepository } from "../../../tribe/application/ports/output/TribeRepositoy";
import { Logger } from "../../models/Logger";
import { TribeDBO } from "../../typeOrmData/entity/TribeDBO";

export class SqlTribeRepository implements TribeRepository {
    #logger: Logger;
    #dataSource: Repository<TribeDBO>;

    constructor(dependencies: {logger: Logger, dataSource: DataSource}) {
        this.#logger = dependencies.logger;
        this.#dataSource = dependencies.dataSource.getRepository(TribeDBO);
    }

    async get(key?: IdTribe | undefined): Promise<Tribe[]> {
        this.#logger.log('Executing get in SqlTribeRepository');
        const result = await this.#dataSource.find({where: {id: key?.getValue}});
        
        return result.map((tribeDBO: TribeDBO) => {
            return tribeDBO.toDomain();
        });
    }

    store(domain: Tribe): Promise<Tribe> {
        throw new Error("Method not implemented.");
    }
    delete(key: IdTribe): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(key: IdTribe, domain: Tribe): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}
