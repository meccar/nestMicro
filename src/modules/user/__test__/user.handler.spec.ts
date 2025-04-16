// create-user.handler.spec.ts
import { Test } from '@nestjs/testing';
import { CreateUserHandler } from '../handlers/create-user.handler';
import { CreateUserUsecase } from 'src/core/user/use-case/create-user';
import { CreateUserCommand } from '../commands/create-user.command';
import { UserEntity } from 'src/core/user/entity/user.entity';
import { UserRepository } from 'src/core/user/repository/user.repository';
import { Repository } from 'typeorm';

describe('CreateUserHandler', () => {
  let handler: CreateUserHandler;
  let usecaseMock: jest.Mocked<CreateUserUsecase>;
  let userRepositoryMock: jest.Mocked<UserRepository>;

  beforeEach(async () => {
    userRepositoryMock = {
      create: jest.fn(),
      save: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      softDelete: jest.fn(),
      restore: jest.fn(),
      count: jest.fn(),
      exists: jest.fn(),
      repository: {} as Repository<UserEntity>,
    };

    const mockCreateUserUsecase = {
      execute: jest.fn(),
    };

    const moduleRef = await Test.createTestingModule({
      providers: [
        CreateUserHandler,
        {
          provide: CreateUserUsecase,
          useValue: mockCreateUserUsecase,
        },
        {
          provide: UserRepository,
          useValue: userRepositoryMock,
        },
      ],
    }).compile();

    handler = moduleRef.get<CreateUserHandler>(CreateUserHandler);
    usecaseMock = moduleRef.get(
      CreateUserUsecase,
    ) as jest.Mocked<CreateUserUsecase>;
  });

  it('should execute create user use case with command payload', async () => {
    const command = new CreateUserCommand({
      firstName: 'Test User',
      lastName: 'Test User',
      userName: 'Test User',
      email: 'test@example.com',
      password: 'Admin@123',
    });

    const expectedResult: UserEntity = {
      id: 123,
      code: '123',
      version: 1,
      firstName: 'Test',
      lastName: 'User',
      userName: 'testuser',
      email: 'test@example.com',
      password: 'hashed-password',
      accessFailedCount: 0,
      lockoutEnabled: false,
      lockoutEnd: null,
      createdAt: new Date(),
      createdBy: '123',
      updatedAt: new Date(),
      updatedBy: '123',
      deletedAt: null,
    };
    usecaseMock.execute.mockResolvedValue(expectedResult);

    const result = await handler.execute(command);

    expect(usecaseMock.execute).toHaveBeenCalledWith(command.payload);
    expect(result).toEqual(expectedResult);
  });
});
