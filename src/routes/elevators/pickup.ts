import { Middleware } from 'koa';
import { pickup } from '../../simulation/pickup';

export const pickupMiddleware: Middleware = async (ctx, next) => {
  await next();

  const { floor } = ctx.request.body;

  const elevators = pickup(floor);

  ctx.body = elevators;
};
