import { Router } from 'express';

import AuthController from './app/controllers/AuthController';
import UserController from './app/controllers/UserController';

import AuthMiddleware from './app/middlewares/auth';

import RecipientController from './app/controllers/RecipientController';

const routes = new Router();
const authRoutes = new Router();

routes.post('/auth', AuthController.store);
routes.post('/users', UserController.store);

// Routes that need authorization
authRoutes.use(AuthMiddleware);
authRoutes.get('/recipients', RecipientController.index);
authRoutes.get('/recipients/:id', RecipientController.find);
authRoutes.post('/recipients', RecipientController.store);
authRoutes.delete('/recipients/:id', RecipientController.destroy);
authRoutes.put('/recipients/:id', RecipientController.update);


routes.use(authRoutes);

export default routes;