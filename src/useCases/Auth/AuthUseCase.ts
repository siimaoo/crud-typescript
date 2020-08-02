import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IAuthRequestDTO } from './AuthDTO';

export class AuthUseCase {
  constructor(
    private usersRepositories: IUsersRepository
  ) {}

  async execute(data: IAuthRequestDTO) {
    const userExists = await this.usersRepositories.findByEmail(data.email);
    const passwordIsEqualToDB = await this.usersRepositories.comparePassword(data.password, userExists.password);

    if (!userExists) {
      throw new Error('Usuario ou senha incorretos!');
    }

    if (!passwordIsEqualToDB) {
      throw new Error('Usuario ou senha incorretos!');
    }

    return await this.usersRepositories.createToken(userExists.id);
  }
}