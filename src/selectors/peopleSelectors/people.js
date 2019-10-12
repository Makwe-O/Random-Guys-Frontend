import { createSelector } from 'reselect';

const selectPeople = state => state.peopleReducer;

export const peopleData = createSelector(
  [selectPeople],
  peopleReducer => {
    return peopleReducer.people;
  }
);
