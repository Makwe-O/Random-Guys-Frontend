const INITIAL_STATE = {
  people: []
};
const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_PEOPLE':
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

export default peopleReducer;
