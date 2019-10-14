import { createSelector } from 'reselect';

const selectPlanet = state => state.planetsReducer;

export const planetData = createSelector(
  [selectPlanet],
  planetsReducer => {
    return planetsReducer.planets;
  }
);

export const planetSearchData = createSelector(
  [selectPlanet],
  planetsReducer => {
    return planetsReducer.searchResult;
  }
);

export const planetSearchParameter = createSelector(
  [selectPlanet],
  planetsReducer => {
    return planetsReducer.searchParameter;
  }
);
