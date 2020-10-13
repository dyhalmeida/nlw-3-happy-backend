import { Router } from 'express';
const routes = Router();

// Orphanages routes
import OrphanageController from './controllers/Orphanages';
routes.post('/orphanages', OrphanageController.store);
routes.get('/orphanages', OrphanageController.index);

export default routes;
