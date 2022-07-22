import { Column, PrimaryColumn } from "typeorm";

export class MetricsDBO {
    @PrimaryColumn({name: 'id_repository'})
    id: number;

    @Column()
    coverage: number;

    @Column()
    bugs: number;

    @Column()
    vulnerabilities: number;

    @Column()
    hotspot: number;

    @Column()
    codeSmells: number; 

    constructor(idRepository: number, coverage: number, bugs: number, vulnerabilties: number, hotspot: number, codeSmells: number) {
        this.id = idRepository;
        this.coverage = coverage;
        this.bugs = bugs;
        this.vulnerabilities = vulnerabilties;
        this.hotspot = hotspot;
        this.codeSmells = codeSmells;
    }
}
