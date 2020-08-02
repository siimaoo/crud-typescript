import { User } from "../entities/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  save(user: User): Promise<void>;
  delete(id: string): Promise<void>;
  comparePassword(password: string, dbPassword: string): Promise<boolean>;
  transformPasswordInHash(password: string): Promise<string>;
  createToken(id: string): Promise<string>;
}