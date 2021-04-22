import { getConfig } from 'config';
import { Elevator } from 'types';
import { getState, updateState } from '../state';

const { initialElevatorCount } = getConfig();

export const getElevators = () => getState().elevators;

export const createElevator = (
  currentFloor = 0,
  destinationFloor = 0,
  direction = 0,
): Elevator => ({
  currentFloor,
  destinationFloor,
  direction,
});

export const initializeElevators = () => {
  const elevators: Record<number, Elevator> = {};
  for (let i = 0; i < initialElevatorCount; i += 1) {
    elevators[i] = createElevator();
  }

  return elevators;
};

export const resetElevators = () => {
  const { elevators } = updateState({ elevators: initializeElevators() });

  return elevators;
};

export const addElevator = (id: number) => {
  const elevators = getElevators();

  if (elevators[id]) {
    return elevators;
  }

  const newElevator = createElevator();

  const { elevators: updatedElevators } = updateState({
    elevators: { ...elevators, [id]: newElevator },
  });

  return updatedElevators;
};

export const updateElevators = (
  id: number,
  currentFloor: number,
  destinationFloor: number,
) => {
  const elevators = getElevators();
  if (!elevators[id]) {
    return elevators;
  }

  const { elevators: updatedElevators } = updateState({
    elevators: {
      ...elevators,
      [id]: createElevator(currentFloor, destinationFloor),
    },
  });

  return updatedElevators;
};
