import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  code: string;

  @Column({ default: 1 })
  version: number;

  @Column()
  readonly createdAt?: Date | null | undefined;

  @Column()
  createdBy: string;

  @Column()
  readonly updatedAt?: Date | null | undefined;

  @Column()
  updatedBy: string;

  @Column({ default: null })
  deletedAt?: Date | null | undefined;
}
