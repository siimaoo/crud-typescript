import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";
import { getRepository } from 'typeorm';

export class MysqlUserRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User | undefined> {
   const user = await getRepository(User).findOne({where: {email}});

   return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await getRepository(User).findOne({where: {id}});

    return user;
  }

  async comparePassword(password: string, dbPassword: string): Promise<boolean> {
    return bcryptjs.compare(password, dbPassword);
  }

  async createToken(id: string): Promise<string> {
    const token = await jwt.sign({ id }, process.env.SECRET as string, {
      expiresIn: '7d'
    });

    return token;
  }

  async delete(id: string): Promise<void> {
    await getRepository(User).delete({id});
  }

  async save(user: User): Promise<void> {
    await getRepository(User).save(user);
  }
}