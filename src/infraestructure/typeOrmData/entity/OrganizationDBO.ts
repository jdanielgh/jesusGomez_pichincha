import { Column, Entity, PrimaryColumn } from "typeorm";
import { IdOrganization } from "../../../organization/application/domain/idOrganization";
import { NameOrganization } from "../../../organization/application/domain/NameOrganization";
import { Organization } from "../../../organization/application/domain/Organization";
import { StatusOrganization } from "../../../organization/application/domain/StatusOrganization";

@Entity('organization')
export class OrganizationDBO {
    @PrimaryColumn({name: 'id_organization'})
    idOrganization: number;

    @Column()
    name: string;

    @Column()
    status: number;

    constructor(idOrganizacion: number, name: string, status: number) {
        this.idOrganization = idOrganizacion;
        this.name = name;
        this.status = status;
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

    get getIdOrganization(): number {
        return this.idOrganization;
    }

    get getName(): string {
        return this.name;
    }

    get getStatus(): number {
        return this.status;
    }

    set setIdOrganizacion(id: number) {
        this.idOrganization = id;
    }

    set setName(name: string) {
        this.name = name;
    }

    set setStatus(status: number) {
        this.status = status;
    }
}
