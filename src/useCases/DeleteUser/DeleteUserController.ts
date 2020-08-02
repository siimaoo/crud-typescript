import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { Request, Response } from "express";

export class DeleteUserController {
  constructor(
    private DeleteUserUseCase: DeleteUserUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      await this.DeleteUserUseCase.execute({id});

      return response.status(200).send({success: true, message: 'Usuario deletado com sucesso!'});
    } catch (err) {
      return response.status(401).send({
        success: false,
        message: err || 'Erro inesperado!'
      });
    }
  }
}