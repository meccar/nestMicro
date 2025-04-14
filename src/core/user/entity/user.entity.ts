import { BaseEntity } from "src/shared/entity/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    userName: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    accessFailedCount: number

    @Column()
    lockoutEnabled: boolean

    @Column()
    lockoutEnd: Date | null
}