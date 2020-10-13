import { Router } from 'express';
const routes = Router();

// Orphanages routes
import OrphanageController from './controllers/Orphanages';
routes.post('/orphanages', OrphanageController.store);

export default routes;
