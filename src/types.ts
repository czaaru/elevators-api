export enum Direction {
  UP = 1,
  DOWN = -1,
  NONE = 0,
}

export interface Elevator {
  currentFloor: number;
  destinationFloor: number;
  direction: Direction;
}

export interface ApplicationState {
  elevators: Record<number, Elevator>;
}
