import { Middleware } from 'koa';
import { updateElevators } from '../../simulation/elevators';

export const updateElevatorMiddleware: Middleware = async (ctx, next) => {
  await next();

  const { id } = ctx.params;

  const { currentFloor, destinationFloor } = ctx.request.body;

  const elevators = updateElevators(id, currentFloor, destinationFloor);

  ctx.body = elevators;
};
