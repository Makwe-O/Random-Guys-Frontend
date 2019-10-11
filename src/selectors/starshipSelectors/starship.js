import { createSelector } from 'reselect';

const selectStarship = state => state.starshipsReducer;

export const starshipData = createSelector(
  [selectStarship],
  starshipsReducer => {
    return starshipsReducer.starships;
  }
);
