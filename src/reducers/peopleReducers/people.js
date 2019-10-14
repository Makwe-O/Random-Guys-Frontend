const INITIAL_STATE = {
  people: [],
  searchResult: [],
  searchParameter: ''
};
const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_PEOPLE_SUCCESS':
      return {
        ...state,
        people: action.payload
      };

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
