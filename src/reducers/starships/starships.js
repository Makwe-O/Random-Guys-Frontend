const INITIAL_STATE = {
  starships: []
};
const starshipsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_STARSHIPS':
      return {
        ...state,
        ...action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default starshipsReducer;
