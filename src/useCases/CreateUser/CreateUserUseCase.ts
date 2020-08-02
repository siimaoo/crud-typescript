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

    data.password = await this.usersRepository.transformPasswordInHash(data.password);

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}