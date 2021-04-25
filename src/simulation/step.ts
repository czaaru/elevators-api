import { updateState } from 'state';
import { Direction, Elevator } from '../types';
import { prepareDirection } from './direction';
import { createElevator, getElevators } from './elevators';

const moveElevators = (elevators: Record<number, Elevator>) =>
  Object.entries(elevators).reduce((acc, [elevatorId, elevator]) => {
    const nextFloor = elevator.currentFloor + elevator.direction;
    const [nextDestination] = elevator.destinations;
    const reachedDestination = nextFloor === nextDestination;
    return {
      ...acc,
      [elevatorId]: createElevator(
        nextFloor,
        reachedDestination
          ? elevator.destinations.slice(1)
          : [...elevator.destinations],
        nextDestination !== undefined
          ? prepareDirection(nextDestination, reachedDestination, nextFloor)
          : Direction.NONE,
      ),
    };
  }, {});

export const simulationStep = () => {
  const elevators = getElevators();

  const { elevators: updatedElevators } = updateState({
    elevators: moveElevators(elevators),
  });

  return updatedElevators;
};
