import { Router } from 'express';
import { AppRouter } from '../api';

const baseRouter = Router();

baseRouter.use('/api', AppRouter);

export { baseRouter };