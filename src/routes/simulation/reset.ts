import { Middleware } from 'koa';
import { resetElevators } from '../../simulation';

export const resetMiddleware: Middleware = async (ctx, next) => {
  await next();

  ctx.body = resetElevators();
};
