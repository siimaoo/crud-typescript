import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";

export class MysqlUserRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
  }

  async findById(id: string): Promise<User> {

  }

  async comparePassword(password: string, dbPassword: string): Promise<boolean> {
    let isEqual = false; 

    bcryptjs.compare(password, dbPassword, (err, same) => {
      if (err) throw new Error('Erro inesperado!');
      if (!same) isEqual = false;

      isEqual = true;
    });

    return isEqual;
  }
  
  async transformPasswordInHash(password: string): Promise<string> {
    bcryptjs.hash(password, 10, (err, encrypted) => {
      if (err) {
        throw new Error('Erro ao encriptar senha.');
      }

      password = encrypted;
    });

    return password;
  }

  async createToken(id: string): Promise<string> {
    const token = await jwt.sign({ id }, process.env.SECRET as string, {
      expiresIn: '7d'
    });

    return token;
  }

  async delete(id: string): Promise<void> {
    
  }

  async save(user: User): Promise<void> {
    
  }
}