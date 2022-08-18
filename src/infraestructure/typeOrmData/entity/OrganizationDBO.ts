import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { IdOrganization } from "../../../organization/application/domain/idOrganization";
import { NameOrganization } from "../../../organization/application/domain/NameOrganization";
import { Organization } from "../../../organization/application/domain/Organization";
import { StatusOrganization } from "../../../organization/application/domain/StatusOrganization";
import { TribeDBO } from "./TribeDBO";

@Entity('organization')
export class OrganizationDBO {
    @PrimaryColumn({name: 'id_organization'})
    idOrganization: number;

    @Column()
    name: string;

    @Column()
    status: number;

    @OneToMany(() => TribeDBO, (tribe) => tribe.organization)
    tribes?: TribeDBO[]


    constructor(idOrganizacion: number, name: string, status: number, tribes?: TribeDBO[]) {
        this.idOrganization = idOrganizacion;
        this.name = name;
        this.status = status;
        this.tribes = tribes;
    }

    toDomain(): Organization {
        return new Organization(
            new IdOrganization(this.idOrganization),
            new NameOrganization(this.name),
            new StatusOrganization(this.status)
        );
    }

    static fromDomain(organization: Organization): OrganizationDBO {
        return new OrganizationDBO(
            organization.getId.getValue,
            organization.getName.getValue,
            organization.getStatus.getValue
            );
    }

}
