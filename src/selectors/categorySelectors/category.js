import { createSelector } from 'reselect';

const selectCategory = state => state.categoryReducer;

export const categoryData = createSelector(
  [selectCategory],
  categoryReducer => {
    return categoryReducer.category;
  }
);

export const categoryDataError = createSelector(
  [selectCategory],
  categoryReducer => {
    return categoryReducer.error;
  }
);
