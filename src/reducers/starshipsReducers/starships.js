const INITIAL_STATE = {
  starships: [],
  searchResult: [],
  searchParameter: ''
};
const starshipsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_STARSHIPS_SUCCESS':
      return {
        ...state,
        starships: action.payload
      };
    case 'SEARCH_STARSHIPS_SUCCESS':
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

export default starshipsReducer;
