import { Router, response } from "express";
import { authController } from './useCases/Auth/';
import { createUserController } from './useCases/CreateUser/';
import { deleteUserController } from './useCases/DeleteUser/';
import { showUserController } from './useCases/ShowUser/';

const router = Router();

router.get('/user/:id', (request, response) => {
  return showUserController.handle(request, response);
});

router.post('/signin', (request, response) => {
  return authController.handle(request, response);
});

router.post('/signup', (request, response) => {
  return createUserController.handle(request, response);
});

router.delete('/user/:id', (request, response) => {
  return deleteUserController.handle(request, response);
});

export { router };