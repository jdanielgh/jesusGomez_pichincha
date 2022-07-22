import { Column, Entity, PrimaryColumn } from "typeorm";
import { IdOrganizationTribe } from "../../../tribe/application/domain/IdOrganizationTribe";
import { IdTribe } from "../../../tribe/application/domain/IdTribe";
import { NameTribe } from "../../../tribe/application/domain/NameTribe";
import { StatusTribe } from "../../../tribe/application/domain/StatusTribe";
import { Tribe } from "../../../tribe/application/domain/Tribe";

@Entity('tribe')
export class TribeDBO {
    @PrimaryColumn({name: 'id_tribe'})
    id: number;

    @Column()
    name: string;

    @Column()
    status: number;

    @Column({name: 'id_organization'})
    idOrganization: number;

    constructor(id: number, name: string, status: number, organization: number) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.idOrganization = organization;
    }

    toDomain(): Tribe {
        return new Tribe(
            new IdTribe(this.id),
            new NameTribe(this.name),
            new StatusTribe(this.status),
            new IdOrganizationTribe(this.idOrganization)
        );
    }

    static fromDomain(tribe: Tribe): TribeDBO {
        return new TribeDBO(
            tribe.getId.getValue,
            tribe.getName.getValue,
            tribe.getStatus.getValue,
            tribe.getIdOrganization.getValue);
    }

}
