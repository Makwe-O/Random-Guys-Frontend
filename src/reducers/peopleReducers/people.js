const INITIAL_STATE = {
  people: []
};
const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_PEOPLE_SUCCESS':
      return {
        ...state,
        people: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default peopleReducer;
