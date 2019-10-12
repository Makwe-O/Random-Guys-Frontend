import { combineReducers } from 'redux';
import peopleReducer from './peopleReducers/people';
import starshipsReducer from './starshipsReducers/starships';
import planetsReducer from './planetsReducers/planets';
import categoryReducer from './categoryReducers/category';

const reducers = combineReducers({
  peopleReducer,
  starshipsReducer,
  planetsReducer,
  categoryReducer
});

export default reducers;
