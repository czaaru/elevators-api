import { Middleware } from 'koa';
import { simulationStep } from '../../simulation';

export const simulationStepMiddleware: Middleware = async (ctx, next) => {
  await next();

  ctx.body = simulationStep();
};
