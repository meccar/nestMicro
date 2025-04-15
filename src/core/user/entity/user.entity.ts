import { AutoMap } from '@automapper/classes';
import { BaseEntity } from 'src/shared/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column()
  @AutoMap()
  firstName: string;

  @Column()
  @AutoMap()
  lastName: string;

  @Column()
  @AutoMap()
  userName: string;

  @Column()
  @AutoMap()
  email: string;

  @Column()
  password: string;

  @Column()
  accessFailedCount: number;

  @Column()
  lockoutEnabled: boolean;

  @Column()
  lockoutEnd: Date | null;
}
