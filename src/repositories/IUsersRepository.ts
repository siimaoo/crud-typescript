import { User } from "../entities/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  save(user: User): Promise<void>;
  delete(id: string): Promise<void>;
  comparePassword(password: string, dbPassword: string): Promise<boolean>;
  createToken(id: string): Promise<string>;
}