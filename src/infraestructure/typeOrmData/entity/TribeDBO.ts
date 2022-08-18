import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { IdOrganizationsTribe } from "../../../tribe/application/domain/IdOrganizationTribe";
import { IdTribe } from "../../../tribe/application/domain/IdTribe";
import { NameTribe } from "../../../tribe/application/domain/NameTribe";
import { StatusTribe } from "../../../tribe/application/domain/StatusTribe";
import { Tribe } from "../../../tribe/application/domain/Tribe";
import { OrganizationDBO } from "./OrganizationDBO";
import { RepositoryDBO } from "./RepositoryDBO";

@Entity('tribe')
export class TribeDBO {
    @PrimaryColumn({name: 'id_tribe'})
    id: number;

    @Column()
    name: string;

    @Column()
    status: number;

    @ManyToOne(() => OrganizationDBO, (organization) => organization.tribes)
    @JoinColumn({name: 'id_organization'})
    organization?: OrganizationDBO;

    @OneToMany(() => RepositoryDBO, (repository) => repository.tribe)
    repositories?: RepositoryDBO[];

    constructor(id: number, name: string, status: number, organization?: OrganizationDBO, repositories?: RepositoryDBO[]) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.organization = organization;
        this.repositories = repositories;
    }

    toDomain(): Tribe {
        const organizations = this.organization && this.organization.toDomain();
        return new Tribe(
            new IdTribe(this.id),
            new NameTribe(this.name),
            new StatusTribe(this.status),
        );
    }

    static fromDomain(tribe: Tribe): TribeDBO {
        return new TribeDBO(
            tribe.getId.getValue,
            tribe.getName.getValue,
            tribe.getStatus.getValue);
    }

}
