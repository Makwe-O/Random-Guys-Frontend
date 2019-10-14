const INITIAL_STATE = {
  people: [],
  searchResult: [],
  searchParameter: ''
};
const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_PEOPLE_SUCCESS':
      if (action.payload.filterParameter) {
        return {
          ...state,
          people: action.payload.res.results.filter(
            result => result.gender === action.payload.filterParameter
          )
        };
      } else {
        return {
          ...state,
          people: action.payload.res
        };
      }

    case 'SEARCH_PEOPLE_SUCCESS':
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

export default peopleReducer;
