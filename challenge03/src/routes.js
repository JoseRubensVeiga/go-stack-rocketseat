import multer from 'multer';
import { Router } from 'express';

import AuthController from './app/controllers/AuthController';
import AuthMiddleware from './app/middlewares/auth';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import FileController from './app/controllers/FileController';
import OrderController from './app/controllers/OrderController';

import multerConfig from './config/multer';

const routes = new Router();

const upload = multer(multerConfig);

// public routes
routes.post('/auth', AuthController.store);

// protected routes
routes.use(AuthMiddleware);

// Recipients
routes.get('/recipients', RecipientController.index);
routes.get('/recipients/:id', RecipientController.show);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.destroy);

// Deliverymans
routes.get('/deliveryman', DeliverymanController.index);
routes.get('/deliveryman/:id', DeliverymanController.show);
routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman/:id', DeliverymanController.update);

// files
routes.post('/files', upload.single('file'), FileController.store);

// orders
routes.post('/orders', OrderController.store);
export default routes;
