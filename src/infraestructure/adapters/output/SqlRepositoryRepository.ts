import { DataSource, Repository } from "typeorm";
import { IdRepository } from "../../../repository/application/domain/IdRepository";
import { Repository as RepositoryModel } from "../../../repository/application/domain/Repository";
import { RepositoryRepository } from "../../../repository/application/ports/output/RepositoryRepository";
import { IdOrganizationsTribe } from "../../../tribe/application/domain/IdOrganizationTribe";
import { IdTribe } from "../../../tribe/application/domain/IdTribe";
import { NameTribe } from "../../../tribe/application/domain/NameTribe";
import { StatusTribe } from "../../../tribe/application/domain/StatusTribe";
import { Tribe } from "../../../tribe/application/domain/Tribe";
import { Logger } from "../../models/Logger";
import { RepositoryDBO } from "../../typeOrmData/entity/RepositoryDBO";
import { TribeDBO } from "../../typeOrmData/entity/TribeDBO";

export class SqlRepositoryRepository implements RepositoryRepository {

    #logger: Logger;
    #dataSource: Repository<RepositoryDBO>

    constructor(dependencies: {logger: Logger, dataSource: DataSource}) {
        this.#logger = dependencies.logger;
        this.#dataSource = dependencies.dataSource.getRepository(RepositoryDBO);
    }

    async getByIdTribe(idTribe: IdTribe): Promise<RepositoryModel[]> {
        this.#logger.log('Executing getByIdTribe in SqlRepositoryRepository');
        const value = new Tribe(
            new IdTribe(1),
            new NameTribe('1'),
            new StatusTribe(1)
        );
        // const result = await this.#dataSource.find({where: { tribe: { id: idTribe.getValue }}, relations: { metric: true, tribe: true}});
        const result = await this.#dataSource.createQueryBuilder('repository')
            .innerJoin('repository.metric', 'metric')
            .where('id_tribe = :id', {id: idTribe.getValue})
            .getMany();
        console.log(result);
        return result.map( repositoryDBO => { return repositoryDBO.toDomain()});
    }

    store(domain: RepositoryModel): Promise<RepositoryModel> {
        throw new Error("Method not implemented.");
    }
    get(key?: IdRepository | undefined): Promise<RepositoryModel[]> {
        throw new Error("Method not implemented.");
    }
    delete(key: IdRepository): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(key: IdRepository, domain: RepositoryModel): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}