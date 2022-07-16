import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('organization')
export class OrganizationDBO {
    @PrimaryGeneratedColumn({name: 'id_organization'})
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

    get getIdOrganization(): number {
        return this.idOrganization;
    }

    get getName(): string {
        return this.name;
    }

    get getStatus(): number {
        return this.status;
    }
}