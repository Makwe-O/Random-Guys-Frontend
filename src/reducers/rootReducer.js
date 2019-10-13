import { combineReducers } from 'redux';
import peopleReducer from './peopleReducers/people';
import starshipsReducer from './starshipsReducers/starships';
import planetsReducer from './planetsReducers/planets';
import categoryReducer from './categoryReducers/category';
import singleStarwarDataReducer from './singleStarwarDataReducer/singleStarwarData';

const reducers = combineReducers({
  peopleReducer,
  starshipsReducer,
  planetsReducer,
  categoryReducer,
  singleStarwarDataReducer
});

export default reducers;
