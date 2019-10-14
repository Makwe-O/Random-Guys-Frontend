const INITIAL_STATE = {
  planets: [],
  searchResult: [],
  searchParameter: ''
};
const planetsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_PLANETS_SUCCESS':
      return {
        ...state,
        planets: action.payload
      };

    case 'SEARCH_PLANETS_SUCCESS':
      return {
        ...state,
        searchResult: action.payload.res,
        searchParameter: action.payload.search
      };

    default:
      return {
        ...state
      };
  }
};

export default planetsReducer;
