import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryColumn } from "typeorm";
import { CreateTimeRepository } from "../../../repository/application/domain/CreateTimeRepository";
import { IdRepository } from "../../../repository/application/domain/IdRepository";
import { NameRepository } from "../../../repository/application/domain/NameRepository";
import { Repository } from "../../../repository/application/domain/Repository";
import { StateRepository } from "../../../repository/application/domain/StateRepository";
import { StatusRepository } from "../../../repository/application/domain/StatusRepository";
import { StateRepositoryE, StatusRepositoryE } from "../../../shared/constant/repository.constant";
import { StateRepositoryType, StatusRepositoryType } from "../../../shared/types/repository.type";
import { TribeDBO } from "./TribeDBO";

@Entity('repository')
export class RepositoryDBO {
    @PrimaryColumn({name: 'id_repository'})
    id: number;

    @Column()
    name: string;

    @Column({type: 'varchar', length: 1,enum: Object.keys(StateRepositoryE)})
    state: StateRepositoryType;

    @CreateDateColumn({name: 'create_time'})
    createTime: Date;

    @Column({type: 'varchar', length: 1, enum: Object.keys(StatusRepositoryE)})
    status: StatusRepositoryType;

    @Column({name: 'id_tribe'})

    @ManyToOne(() => TribeDBO, (tribe) => tribe.repositories)
    @JoinColumn({name: 'id_tribe'})
    tribe: TribeDBO | undefined;

    constructor(id: number, name: string, createTime: Date, status: StatusRepositoryType, state: StateRepositoryType, tribe?: TribeDBO) {
        this.id = id;
        this.name = name;
        this.createTime = createTime;
        this.state = state,
        this.status = status;
        this.tribe = tribe;
    }

    toDomain(): Repository {
        return new Repository(
            new IdRepository(this.id),
            new NameRepository(this.name),
            new StateRepository(this.state),
            new CreateTimeRepository(this.createTime),
            new StatusRepository(this.status)
        )
    }

    static fromDomain(repository: Repository): RepositoryDBO {
        return new RepositoryDBO(
            repository.getId().getValue,
            repository.getName().getValue,
            repository.getCreateTime().getValue,
            repository.getStatus().getValue,
            repository.getState().getValue,
            undefined
        );
    }
}
