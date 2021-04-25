import { updateState } from 'state';
import { prepareDirection } from './direction';
import { createElevator, getElevators } from './elevators';

export const pickup = (floor: number) => {
  const elevators = getElevators();
  const [[freeElevatorId]] = Object.entries(elevators).sort(
    ([_, elevatorA], [__, elevatorB]) =>
      elevatorA.destinations.length - elevatorB.destinations.length,
  );
  if (freeElevatorId === undefined) {
    return elevators;
  }

  const freeElevator = elevators[Number(freeElevatorId)];

  const sameFloor = freeElevator.currentFloor === floor;
  const newDirection =
    freeElevator.destinations.length === 0
      ? prepareDirection(floor, sameFloor, freeElevator.currentFloor)
      : freeElevator.direction;

  const { elevators: updatedElevators } = updateState({
    elevators: {
      ...elevators,
      [freeElevatorId]: createElevator(
        freeElevator.currentFloor,
        [...freeElevator.destinations, floor],
        newDirection,
      ),
    },
  });
  return updatedElevators;
};
