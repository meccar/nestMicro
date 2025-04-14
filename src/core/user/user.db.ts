import { DataSource } from "typeorm";
import { User } from "./entity/user.entity";

export const UserDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'db_user',
    password: 'db_password',
    database: 'db_name',
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})