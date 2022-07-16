import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "cockroachdb",
    url: "postgresql://jdaniel:jq_GFeCtpR3kymqtvCw0Hw@free-tier11.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb",
    ssl: true,
    extra: {
        options: "--cluster=sandy-hornet-1404"
    },
    synchronize: true,
    logging: false,
    entities: ["src/infraestructure/typeOrmData/entity/**/*.ts"],
    migrations: ["src/infraestructure/typeOrmData/migration/**/*.ts"],
    subscribers: ["src/infraestructure/typeOrmData/subscriber/**/*.ts"]
})
