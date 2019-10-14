import makeRequest from '../../utils/axiosSetup';

export const GET_PEOPLE_SUCCESS = 'GET_PEOPLE_SUCCESS';
export const GET_PEOPLE_FAILURE = 'GET_PEOPLE_FAILURE';
export const SEARCH_PEOPLE_SUCCESS = 'SEARCH_PEOPLE_SUCCESS';
export const SEARCH_PEOPLE_FAILURE = 'SEARCH_PEOPLE_FAILURE';

export const get_people = filterParameter => async dispatch => {
  try {
    const res = await makeRequest('people', null, null, { method: 'GET' });
    if (filterParameter) {
      dispatch({
        type: GET_PEOPLE_SUCCESS,
        payload: { res, filterParameter }
      });
    } else {
      dispatch({
        type: GET_PEOPLE_SUCCESS,
        payload: { res }
      });
    }
  } catch {
    dispatch({
      type: GET_PEOPLE_FAILURE
    });
  }
};

export const search_people = (search, page) => async dispatch => {
  try {
    const res = await makeRequest('people', search, page, { method: 'GET' });
    dispatch({
      type: SEARCH_PEOPLE_SUCCESS,
      payload: { res, search }
    });
  } catch {
    dispatch({
      type: SEARCH_PEOPLE_FAILURE
    });
  }
};
