import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";
import { DeleteUserController } from "./DeleteUserController";

const mysqlRepository = new MysqlUserRepository();

const deleteUserUseCase = new DeleteUserUseCase(
  mysqlRepository
);

const deleteUserController = new DeleteUserController(
  deleteUserUseCase
);

export { deleteUserUseCase, deleteUserController };