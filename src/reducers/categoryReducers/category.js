const INITIAL_STATE = {
  category: []
};
const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_CATEGORY_SUCCESS':
      return {
        ...state,
        category: action.payload
      };
    case 'GET_CATEGORY_FAILURE':
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

export default categoryReducer;
