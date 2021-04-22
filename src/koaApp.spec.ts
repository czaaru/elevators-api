import { startService } from './koaApp';

jest.mock('koa');

const setServerPortEnv = (port: string) => {
  const originalServerPort = process.env.PORT;

  process.env.PORT = port;

  return () => {
    process.env.PORT = originalServerPort;
  };
};

const deleteServerPortEnv = () => {
  const originalServerPort = process.env.PORT;

  delete process.env.PORT;

  return () => {
    process.env.PORT = originalServerPort;
  };
};

describe('Koa app', () => {
  it('should set the port if PORT is set', () => {
    const port = '5000';
    const cleanup = setServerPortEnv(port);
    const app = startService();
    expect(app.listen).toHaveBeenCalledWith(port);

    cleanup();
  });

  it('should not set the port if PORT is not set', () => {
    const cleanup = deleteServerPortEnv();
    const app = startService();
    expect(app.listen).not.toHaveBeenCalled();

    cleanup();
  });
});
