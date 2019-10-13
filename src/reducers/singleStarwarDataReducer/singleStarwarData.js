const INITIAL_STATE = {
  singleStarwarData: {}
};
const singleStarwarDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_SINGLE_DATA_SUCCESS':
      return {
        ...state,
        singleStarwarData: action.payload
      };

    case 'GET_SINGLE_DATA_FAILURE':
      return {
        ...state,
        error: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default singleStarwarDataReducer;
