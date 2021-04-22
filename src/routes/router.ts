import Router from '@koa/router';
import {
  addElevatorMiddleware,
  elevatorsMiddleware,
  updateElevatorMiddleware,
  pickupMiddleware,
} from './elevators';
import { simulationStepMiddleware, resetMiddleware } from './simulation';

export const router = new Router();

router.get('/elevators', elevatorsMiddleware);
router.post('/elevators/pickup', pickupMiddleware);
router.post('/elevators', addElevatorMiddleware);
router.put('/elevators/:id', updateElevatorMiddleware);

router.post('/simulation/step', simulationStepMiddleware);
router.delete('/simulation/reset', resetMiddleware);
