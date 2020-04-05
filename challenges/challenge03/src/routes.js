import multer from 'multer';
import { Router } from 'express';

import AuthController from './app/controllers/AuthController';
import AuthMiddleware from './app/middlewares/auth';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import FileController from './app/controllers/FileController';
import OrderController from './app/controllers/OrderController';
import DeliveriesController from './app/controllers/DeliveriesController';
import DeliveryOrderController from './app/controllers/DeliveryOrderController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';
import WithdrawOrderController from './app/controllers/WithdrawOrderController';

import multerConfig from './config/multer';

const router = new Router();

const upload = multer(multerConfig);

// public router
router.post('/auth', AuthController.store);

// orders for deliverymans
router.get('/deliveryman/:id/orders/', DeliveriesController.index);

// change order status
router.put('/orders/:id/delivery/', DeliveryOrderController.update);

// delivery problems
router.get('/problems', DeliveryProblemController.index);
router.get('/order/:id/problems', DeliveryProblemController.show);
router.post('/order/:id/problems', DeliveryProblemController.store);
// orders for deliverymans
router.get('/deliveryman/:id/orders/', DeliveriesController.index);

// change order status
router.put('/orders/:id/withdraw/', WithdrawOrderController.update);
router.put(
  '/orders/:id/delivery/',
  upload.single('file'),
  DeliveryOrderController.update
);

// delivery problems
router.get('/problems', DeliveryProblemController.index);
router.get('/order/:id/problems', DeliveryProblemController.show);
router.post('/order/:id/problems', DeliveryProblemController.store);

// protected router
router.use(AuthMiddleware);

router.delete(
  '/problems/:id/cancel-delivery',
  DeliveryProblemController.destroy
);

// Recipients
router.get('/recipients', RecipientController.index);
router.get('/recipients/:id', RecipientController.show);
router.post('/recipients', RecipientController.store);
router.put('/recipients/:id', RecipientController.update);
router.delete('/recipients/:id', RecipientController.destroy);

// Deliverymans
router.get('/deliveryman', DeliverymanController.index);
router.get('/deliveryman/:id', DeliverymanController.show);
router.post('/deliveryman', DeliverymanController.store);
router.put('/deliveryman/:id', DeliverymanController.update);

// files
router.post('/files', upload.single('file'), FileController.store);

// orders
router.get('/orders', OrderController.index);
router.get('/orders/:id', OrderController.show);
router.post('/orders', OrderController.store);
router.put('/orders/:id', OrderController.update);
router.delete('/orders/:id', OrderController.destroy);

export default router;
