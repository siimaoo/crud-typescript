import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";
import { ShowUserUseCase } from "./ShowUserUseCase";
import { ShowUserController } from "./ShowUserController";

const mysqlRepository = new MysqlUserRepository();

const showUserUseCase = new ShowUserUseCase(
  mysqlRepository
);

const showUserController = new ShowUserController(
  showUserUseCase
);

export { showUserUseCase, showUserController };