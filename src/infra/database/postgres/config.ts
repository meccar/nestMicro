import path from "path";
import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    namingStrategy: new SnakeNamingStrategy(),
    logging: true,
    migrationsTableName: 'migrations',
    // migrations: [path.join(__dirname, '/migrations/*.{ts,js}')],
    entities: [path.join(__dirname, '/core/**/entity/*.{ts,js}')]
})