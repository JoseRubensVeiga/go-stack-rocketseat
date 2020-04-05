import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import 'express-group-routes';

import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';
import SessionController from './app/controllers/SessionController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.group(auth => {
  auth.put('/users', authMiddleware, UserController.update);
  auth.get('/users', authMiddleware, UserController.index);

  auth.post(
    '/files',
    authMiddleware,
    upload.single('file'),
    FileController.store
  );

  auth.get(
    '/providers/:providerId/available',
    authMiddleware,
    AvailableController.index
  );

  auth.post('/appointments', authMiddleware, AppointmentController.store);
  auth.get('/appointments', authMiddleware, AppointmentController.index);
  auth.delete(
    '/appointments/:id',
    authMiddleware,
    AppointmentController.destroy
  );

  auth.get('/schedule', authMiddleware, ScheduleController.index);

  auth.get('/notifications', authMiddleware, NotificationController.index);
  auth.put('/notifications/:id', authMiddleware, NotificationController.update);
});

routes.use((_, res) => res.sendStatus(404));

export default routes;
