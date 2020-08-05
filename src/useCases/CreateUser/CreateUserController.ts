import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, cpf, birth_date, phone, gender, password } = request.body;

    try {
      const token = await this.createUserUseCase.execute({
        name,
        email,
        cpf,
        birth_date,
        phone,
        gender,
        password
      });

      return response.status(200).send({success: true, message: 'Usuario criado com sucesso!', token});
    } catch (err) {
      return response.status(400).send({
        success: false,
        message: err.message || 'Erro inesperado.'
      });
    }
  }
}