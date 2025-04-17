import { AutoMap } from '@automapper/classes';
import { BaseEntity } from 'src/shared/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
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
  @AutoMap()
  password: string;

  @Column()
  accessFailedCount: number = 0;

  @Column()
  lockoutEnabled: boolean = false;

  @Column({ type: 'timestamp', nullable: true })
  lockoutEnd: Date | null;
}
