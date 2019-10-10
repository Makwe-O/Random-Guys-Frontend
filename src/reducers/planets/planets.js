const INITIAL_STATE = {
  planets: []
};
const planetsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_PLANETS':
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

export default planetsReducer;
