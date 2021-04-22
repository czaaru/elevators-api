import { updateState } from 'state';
import { Direction, Elevator } from '../types';
import { getElevators } from './elevators';

const prepareDirection = (floor: number, elevator: Elevator) => {
  if (floor === elevator.currentFloor) {
    return Direction.NONE;
  }

  if (floor < elevator.currentFloor) {
    return Direction.DOWN;
  }

  return Direction.UP;
};

export const pickup = (floor: number) => {
  const elevators = getElevators();
  const [freeElevatorId] =
    Object.entries(elevators).find(
      ([_, elevator]) => elevator.direction === 0,
    ) || [];
  if (freeElevatorId === undefined) {
    return elevators;
  }

  const freeElevator = elevators[Number(freeElevatorId)];

  const newDirection = prepareDirection(floor, freeElevator);

  const { elevators: updatedElevators } = updateState({
    elevators: {
      ...elevators,
      [freeElevatorId]: {
        ...freeElevator,
        destinationFloor: floor,
        direction: newDirection,
      },
    },
  });

  return updatedElevators;
};
