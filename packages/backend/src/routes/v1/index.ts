import { Router } from 'express';
import UserRouter, { ROUTE_PREFIX } from './User';

// Init router and path
const router = Router();

// Add sub-routes
router.use(ROUTE_PREFIX, UserRouter);
console.log('6');
// Export the base-router
export default router;
