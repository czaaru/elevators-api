import { ApplicationState } from 'types';

let state: ApplicationState;

export const initializeState = (initialState?: Partial<ApplicationState>) => {
  state = {
    elevators: [],
    ...initialState,
  };
};

export const getState = () => {
  if (!state) {
    initializeState();
  }

  return state;
};

export const updateState = (newState: Partial<ApplicationState>) => {
  state = {
    ...state,
    ...newState,
  };

  return state;
};
