import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../../modules/user/user.controller';
import { UserService } from './repository/user.repository';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userController.createUser()).toBe('Hello World!');
    });
  });
});
