import { Middleware } from 'koa';
import { addElevator } from '../../simulation/elevators';

export const addElevatorMiddleware: Middleware = async (ctx, next) => {
  await next();

  const { id } = ctx.request.body;

  const elevators = addElevator(id);

  ctx.body = elevators;
};
