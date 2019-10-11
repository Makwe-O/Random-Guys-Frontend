import { combineReducers } from 'redux';
import peopleReducer from './peopleReducers/people';
import starshipsReducer from './starshipsReducers/starships';
import planetsReducer from './planetsReducers/planets';

const reducers = combineReducers({
  peopleReducer,
  starshipsReducer,
  planetsReducer
});

export default reducers;
