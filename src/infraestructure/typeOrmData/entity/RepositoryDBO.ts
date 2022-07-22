import { Column, Entity, PrimaryColumn, Timestamp } from "typeorm";

@Entity('repository')
export class RepositoryDBO {
    @PrimaryColumn({name: 'id_repository'})
    id: number;

    @Column()
    name: string;

    @Column()
    state: string;

    @Column({name: 'create_time', type: 'timestamptz'})
    createTime: Date;

    @Column()
    status: string;

    @Column({name: 'id_tribe'})
    idTribe: number;

    constructor(id: number, name: string, createTime: Date, status: string, state: string, tribe: number) {
        this.id = id;
        this.name = name;
        this.createTime = createTime;
        this.state = state,
        this.status = status;
        this.idTribe = tribe;
    }
}
