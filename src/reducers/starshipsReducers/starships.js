const INITIAL_STATE = {
  starships: [],
  searchResult: []
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
        searchResult: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default starshipsReducer;
