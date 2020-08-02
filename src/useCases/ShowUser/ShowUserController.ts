import { ShowUserUseCase } from './ShowUserUseCase';
import { Request, Response } from 'express';

export class ShowUserController {
  constructor(
    private ShowUserUseCase: ShowUserUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const user = await this.ShowUserUseCase.execute({id});

      return response.status(200).send({
        success: true,
        data: user
      })
    } catch(err) {
      return response.status(401).send({
        success: false,
        message: err.message || 'Erro inesperado!'
      })
    }
  }
}