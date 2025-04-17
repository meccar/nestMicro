import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  code: string;

  @Column({ default: 1 })
  version: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  readonly createdAt?: Date | null;

  @Column()
  createdBy: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  readonly updatedAt?: Date | null;

  @Column()
  updatedBy: string;

  @Column({ type: 'timestamp', nullable: true, default: null })
  deletedAt?: Date | null;
}
