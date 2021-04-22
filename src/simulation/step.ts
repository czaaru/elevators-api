import { updateState } from 'state';
import { Elevator } from '../types';
import { getElevators } from './elevators';

const moveElevators = (elevators: Record<number, Elevator>) =>
  Object.entries(elevators).reduce((acc, [elevatorId, elevator]) => {
    const nextFloor = elevator.currentFloor + elevator.direction;

    return {
      ...acc,
      [elevatorId]: {
        ...elevator,
        currentFloor: nextFloor,
        direction:
          nextFloor === elevator.destinationFloor ? 0 : elevator.direction,
      },
    };
  }, {});

export const simulationStep = () => {
  const elevators = getElevators();

  const { elevators: updatedElevators } = updateState({
    elevators: moveElevators(elevators),
  });

  return updatedElevators;
};
