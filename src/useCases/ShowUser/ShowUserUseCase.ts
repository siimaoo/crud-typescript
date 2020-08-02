import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IShowUserRequestDTO } from "./ShowUserDTO";

export class ShowUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: IShowUserRequestDTO) {
    const user = await this.usersRepository.findById(data.id);

    if (!user) {
      throw new Error('Usuario não encontrado na base de dados!');
    }

    return user;
  }
}