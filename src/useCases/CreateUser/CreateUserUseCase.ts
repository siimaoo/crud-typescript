import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}
  
  async execute(data: ICreateUserRequestDTO) {
    const userAlredyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlredyExists) {
      throw new Error('Usuario já existe.');
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    return await this.usersRepository.createToken(user.id);
  }
}