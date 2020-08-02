import { AuthUseCase } from "./AuthUseCase";
import { Request, Response } from "express";

export class AuthController {
  constructor(
    private AuthUseCase: AuthUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

     try {
       const token = await this.AuthUseCase.execute({email, password});

       return response.status(200).send({
         success: true,
         token: token
       });
     } catch(err) {
       return response.status(401).send({
         success: false,
         message: err.message || 'Erro inesperado!'
       })
     }
  }
}