import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  readonly code: string;

  @Column()
  readonly version: number;

  @Column()
  readonly createdAt?: Date | null | undefined;

  @Column()
  createdBy: string;

  @Column()
  readonly updatedAt?: Date | null | undefined;

  @Column()
  updatedBy: string;

  @Column()
  deletedAt?: Date | null | undefined = null;
}
