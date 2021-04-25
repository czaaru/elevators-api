import { Direction } from 'types';

export const prepareDirection = (
  nextDestination: number,
  reachedDestination: boolean,
  floor: number,
) => {
  if (reachedDestination) {
    return Direction.NONE;
  }

  return floor < nextDestination ? Direction.UP : Direction.DOWN;
};
