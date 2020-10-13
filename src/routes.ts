import { Router } from 'express';
const routes = Router();

// Orphanages routes
import OrphanageController from './controllers/Orphanages';
import multer from 'multer';
import uploadingConfig from './config/upload';
const upload = multer(uploadingConfig);

routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanages/:id', OrphanageController.show);
routes.post('/orphanages', upload.array('images'), OrphanageController.store);

export default routes;
