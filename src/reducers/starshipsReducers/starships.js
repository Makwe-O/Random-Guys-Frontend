const INITIAL_STATE = {
  starships: []
};
const starshipsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_STARSHIPS_SUCCESS':
      console.log('ddd');
      return {
        ...state,
        starships: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default starshipsReducer;
