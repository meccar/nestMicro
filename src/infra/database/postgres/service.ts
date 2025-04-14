import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConnectionType, IDataBaseAdapter } from "../adapter";

export class PostgressService implements Partial<IDataBaseAdapter> {
    getConnection<TOpt = TypeOrmModuleOptions & { url: string }>({ URI }: ConnectionType): TOpt {
        return {
          type: 'postgres',
          url: URI,
          database: "name"
        } as TOpt;
    }
}