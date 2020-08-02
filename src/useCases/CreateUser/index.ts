import { MysqlUserRepository } from '../../repositories/implementations/MysqlUserRepository';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

const mysqlRepository = new MysqlUserRepository();

const createUserUseCase = new CreateUserUseCase(
  mysqlRepository
);

const createUserController = new CreateUserController(
  createUserUseCase
);

export { createUserUseCase, createUserController };