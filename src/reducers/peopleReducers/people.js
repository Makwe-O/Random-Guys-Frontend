const INITIAL_STATE = {
  people: [],
  searchResult: []
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
        searchResult: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default peopleReducer;
