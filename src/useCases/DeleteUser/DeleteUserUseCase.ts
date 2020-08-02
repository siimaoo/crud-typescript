import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IDeleteUserRequestDTO } from "./DeleteUserDTO";

export class DeleteUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ){}

  async execute(data: IDeleteUserRequestDTO) {
    const userExists = await this.usersRepository.findById(data.id);

    if (!userExists) {
      throw new Error('Erro ao deletar usuario. Usuario não existe na base de dados!');
    }

    await this.usersRepository.delete(data.id);
  }
}