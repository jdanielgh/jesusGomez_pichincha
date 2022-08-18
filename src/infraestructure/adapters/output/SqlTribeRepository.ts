import { DataSource } from "typeorm";
import { NameOrganization } from "../../../organization/application/domain/NameOrganization";
import { IdTribe } from "../../../tribe/application/domain/IdTribe";
import { Tribe } from "../../../tribe/application/domain/Tribe";
import { TribeRepository } from "../../../tribe/application/ports/output/TribeRepositoy";
import { Logger } from "../../models/Logger";
import { TribeDAO, TribeQueryResult } from "../../models/TribeDAO";
import { TribeDBO } from "../../typeOrmData/entity/TribeDBO";

export class SqlTribeRepository implements TribeRepository {
    #logger: Logger;
    #dataSource: DataSource;

    constructor(dependencies: {logger: Logger, dataSource: DataSource}) {
        this.#logger = dependencies.logger;
        this.#dataSource = dependencies.dataSource;
    }
    
    async getAllRepositoriesByTribe(idTribe: IdTribe): Promise<[Tribe, NameOrganization]> {
        const queryResults: TribeQueryResult[] = await this.#dataSource.query('Select ' +
            't.id_tribe, t.name as tribe_name, t.status as tribe_status, o.name as name_organization, ' +
            'r.name as repository_name, r.create_time, r.state as repository_state, r.status as respository_status, ' +
            'm.* ' +
                'From organization o inner join tribe t on o.id_organization = t.id_organization ' + 
                'inner join repository r on r.id_tribe = t.id_tribe ' +
                'inner join metric m on r.id_repository = m.id_repository ' +
                'Where t.id_tribe = $1', [idTribe.getValue]);
        console.log(queryResults);
        
        const tribesDAO: TribeDAO[] = queryResults.map( (row: TribeQueryResult) => {
            return TribeDAO.fromQueryResult(row);
        });

        const repositories = tribesDAO.map( (tribeDAO) => { return tribeDAO.toRepositoryDomain()});
        const tribe = tribesDAO[0].toTribeDomain(repositories);
        const nameOrganization = new NameOrganization(queryResults[0].name_organization);

        return [tribe, nameOrganization];                                
    }
    
    async get(key?: IdTribe | undefined): Promise<Tribe[]> {
        this.#logger.log('Executing get in SqlTribeRepository');
        const tribeRepository = this.#dataSource.getRepository(TribeDBO);
        const result = await tribeRepository.find();
        
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
