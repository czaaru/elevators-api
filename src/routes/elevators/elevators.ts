import { Middleware } from 'koa';
import { getElevators } from '../../simulation/elevators';

export const elevatorsMiddleware: Middleware = async (ctx, next) => {
  await next();

  ctx.body = getElevators();
};
