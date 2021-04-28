import { getState } from './state';
import { startService } from './koaApp';

jest.mock('koa');

describe('Koa app', () => {
  const defaultConfig = {
    port: 4000,
    initialElevatorCount: 2,
  };
  it('should listen on a port', () => {
    const config = { ...defaultConfig };
    const app = startService(config);

    expect(app.listen).toHaveBeenCalledWith(config.port);
  });

  it('should initialize state', () => {
    const config = { ...defaultConfig };
    startService(config);

    expect(getState()).toEqual({
      elevators: {
        '0': {
          currentFloor: 0,
          destinations: [],
          direction: 0,
        },
        '1': {
          currentFloor: 0,
          destinations: [],
          direction: 0,
        },
      },
    });
  });
});
