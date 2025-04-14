import {
  Repository,
  DeepPartial,
  FindOptionsWhere,
  FindManyOptions,
  FindOneOptions,
  SaveOptions,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { BaseEntity } from '../entity/base.entity';

export class BaseRepository<T extends BaseEntity> {
  constructor(protected readonly repository: Repository<T>) {}

  async create(data: DeepPartial<T>, saveOptions?: SaveOptions): Promise<T> {
    const entity = this.repository.create(data);
    return this.repository.save(entity, saveOptions);
  }

  async save(data: DeepPartial<T>): Promise<T> {
    return this.repository.save(data);
  }

  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(options);
  }

  async findById(id: number): Promise<T | null> {
    return this.repository.findOne({ where: { id } } as FindOneOptions<T>);
  }

  async findOne<TQuery = Partial<T>>(filter: TQuery): Promise<T | null> {
    return this.repository.findOne({ where: filter } as FindOneOptions<T>);
  }

  async update(
    currentRecord: DeepPartial<T>,
    data: QueryDeepPartialEntity<T>,
    options?: SaveOptions,
  ): Promise<T | null> {
    const entity = await this.repository.create({
      ...currentRecord,
      ...data,
      version: (currentRecord.version || 0) + 1,
      id: undefined,
    });

    const newRecord = await this.repository.save(entity, options);

    await this.repository.softRemove(currentRecord as T, options);

    return newRecord;
  }

  async delete(id: number | string): Promise<void> {
    await this.repository.delete(id);
  }

  async softDelete(id: number | string): Promise<void> {
    await this.repository.softDelete(id);
  }

  async restore(id: number | string): Promise<void> {
    await this.repository.restore(id);
  }

  async count(options?: FindManyOptions<T>): Promise<number> {
    return this.repository.count(options);
  }

  async exists(where: FindOptionsWhere<T>): Promise<boolean> {
    const count = await this.repository.count({ where });
    return count > 0;
  }
}
