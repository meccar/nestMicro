import {
  Repository,
  DeepPartial,
  FindOptionsWhere,
  FindManyOptions,
  FindOneOptions,
  SaveOptions,
  DataSource,
  EntityManager,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { BaseEntity } from '../../../shared/entity/base.entity';

export abstract class BaseRepository<T extends BaseEntity> {
  protected readonly repository: Repository<T>;

  constructor(
    protected readonly entity: new () => T,
    protected readonly dataSource: DataSource,
  ) {
    this.repository = this.dataSource.getRepository(entity);
  }

  protected getRepository(entityManager?: EntityManager): Repository<T> {
    return entityManager
      ? entityManager.getRepository(this.entity)
      : this.repository;
  }

  async create(
    data: DeepPartial<T>,
    saveOptions?: SaveOptions,
    entityManager?: EntityManager,
  ): Promise<T> {
    const repo = this.getRepository(entityManager);
    const entity = this.repository.create(data);
    return repo.save(entity, saveOptions);
  }

  async save(data: DeepPartial<T>, entityManager?: EntityManager): Promise<T> {
    const repo = this.getRepository(entityManager);
    return repo.save(data);
  }

  async findAll(options?: FindManyOptions<T>, entityManager?: EntityManager): Promise<T[]> {
    const repo = this.getRepository(entityManager);
    return repo.find(options);
  }

  async findById(id: number, entityManager?: EntityManager): Promise<T | null> {
    const repo = this.getRepository(entityManager);
    return repo.findOne({ where: { id } } as FindOneOptions<T>);
  }

  async findOne(
    filter: FindOptionsWhere<T> | FindOptionsWhere<T>[],
    entityManager?: EntityManager
  ): Promise<T | null> {
    const repo = this.getRepository(entityManager);
    return repo.findOne({ where: filter });
  }

  async update(
    currentRecord: DeepPartial<T>,
    data: QueryDeepPartialEntity<T>,
    options?: SaveOptions,
    entityManager?: EntityManager
  ): Promise<T> {
    const repo = this.getRepository(entityManager);
    const entity = repo.create({
      ...currentRecord,
      ...data,
      version: (currentRecord.version || 0) + 1,
      id: undefined,
    });

    const newRecord = await repo.save(entity, options);

    await repo.softRemove(currentRecord as T, options);

    return newRecord;
  }

  async delete(id: number | string, entityManager?: EntityManager): Promise<void> {
    const repo = this.getRepository(entityManager);
    await repo.delete(id);
  }

  async softDelete(id: number | string, entityManager?: EntityManager): Promise<void> {
    const repo = this.getRepository(entityManager);
    await repo.softDelete(id);
  }

  async restore(id: number | string, entityManager?: EntityManager): Promise<void> {
    const repo = this.getRepository(entityManager);
    await repo.restore(id);
  }

  async count(options?: FindManyOptions<T>, entityManager?: EntityManager): Promise<number> {
    const repo = this.getRepository(entityManager);
    return repo.count(options);
  }

  async exists(where: FindOptionsWhere<T>, entityManager?: EntityManager): Promise<boolean> {
    const repo = this.getRepository(entityManager);
    const count = await repo.count({ where });
    return count > 0;
  }
}
