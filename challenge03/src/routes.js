import { Router } from 'express';

import AuthController from './app/controllers/AuthController';
import AuthMiddleware from './app/middlewares/auth';
import RecipientController from './app/controllers/RecipientController';

import DeliverymanController from './app/controllers/DeliverymanController';

const routes = new Router();
const authRoutes = new Router();

routes.post('/auth', AuthController.store);

authRoutes.use(AuthMiddleware);
// Recipients
authRoutes.get('/recipients', RecipientController.index);
authRoutes.get('/recipients/:id', RecipientController.show);
authRoutes.post('/recipients', RecipientController.store);
authRoutes.put('/recipients/:id', RecipientController.update);
authRoutes.delete('/recipients/:id', RecipientController.destroy);

// Deliverymans
authRoutes.get('/deliveryman', DeliverymanController.index);
authRoutes.get('/deliveryman/:id', DeliverymanController.show);
authRoutes.post('/deliveryman', DeliverymanController.store);
authRoutes.put('/deliveryman/:id', DeliverymanController.update);

routes.use(authRoutes);

export default routes;
