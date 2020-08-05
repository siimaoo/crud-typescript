import { Entity, Column, PrimaryColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import { uuid } from 'uuidv4';
import bcryptjs from 'bcryptjs';

@Entity()
export class User {
  @PrimaryColumn()
  public readonly id: string;

  @Column()
  public name: string;

  @Column({unique: true})
  public email: string;

  @Column({unique: true})
  public cpf: string;

  @Column()
  public gender: string;

  @Column()
  public phone: string;

  @Column()
  public password: string;

  @Column()
  public birth_date: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    this.password = await bcryptjs.hash(this.password, 10);
  }

  constructor(props: Omit<User, 'id'|'hashPassword'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}