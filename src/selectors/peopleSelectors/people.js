import { createSelector } from 'reselect';

const selectPeople = state => state.peopleReducer;

export const peopleData = createSelector(
  [selectPeople],
  peopleReducer => {
    return peopleReducer.people;
  }
);

export const peopleSearchData = createSelector(
  [selectPeople],
  peopleReducer => {
    return peopleReducer.searchResult;
  }
);

export const peopleSearchParameter = createSelector(
  [selectPeople],
  peopleReducer => {
    return peopleReducer.searchParameter;
  }
);
