import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";
import { AuthController } from "./AuthController";
import { AuthUseCase } from './AuthUseCase';

const mysqlRepository = new MysqlUserRepository();

const authUseCase = new AuthUseCase(
  mysqlRepository
);

const authController = new AuthController(
  authUseCase
);

export { authUseCase, authController };