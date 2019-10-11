import { createSelector } from 'reselect';

const selectPlanet = state => state.planetsReducer;

export const planetData = createSelector(
  [selectPlanet],
  planetsReducer => {
    return planetsReducer.planets;
  }
);
