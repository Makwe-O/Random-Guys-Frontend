import { createSelector } from 'reselect';

const selectSingleStarwarData = state => state.singleStarwarDataReducer;

export const singleStarwarData = createSelector(
  [selectSingleStarwarData],
  singleStarwarDataReducer => {
    return singleStarwarDataReducer.singleStarwarData;
  }
);

export const singleStarwarDataError = createSelector(
  [selectSingleStarwarData],
  singleStarwarDataReducer => {
    return singleStarwarDataReducer.error;
  }
);
