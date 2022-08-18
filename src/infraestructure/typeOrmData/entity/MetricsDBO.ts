import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { RepositoryDBO } from "./RepositoryDBO";

@Entity('metric')
export class MetricsDBO {
    @PrimaryColumn({name: 'id_repository'})
    id: number;

    @Column({type: 'float'})
    coverage: number;

    @Column()
    bugs: number;

    @Column()
    vulnerabilities: number;

    @Column()
    hotspot: number;

    @Column({name: 'code_smells'})
    codeSmells: number; 

    @OneToOne(() => RepositoryDBO)
    @JoinColumn({name: 'id_repository'})
    repository: RepositoryDBO;

    constructor(idRepository: number, coverage: number, bugs: number, vulnerabilties: number, hotspot: number, codeSmells: number, repository: RepositoryDBO) {
        this.id = idRepository;
        this.coverage = coverage;
        this.bugs = bugs;
        this.vulnerabilities = vulnerabilties;
        this.hotspot = hotspot;
        this.codeSmells = codeSmells;
        this.repository = repository;
    }

    toDomain(): void {

    }
}
