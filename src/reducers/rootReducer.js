import { combineReducers } from 'redux';
import peopleReducer from './people/people';
import starshipsReducer from './starships/starships';
import planetsReducer from './planets/planets';

const reducers = combineReducers({
  peopleReducer,
  starshipsReducer,
  planetsReducer
});

export default reducers;
