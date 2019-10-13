import makeRequest from '../../utils/axiosSetup';

export const GET_PEOPLE_SUCCESS = 'GET_PEOPLE_SUCCESS';
export const GET_PEOPLE_FAILURE = 'GET_PEOPLE_FAILURE';
export const SEARCH_PEOPLE_SUCCESS = 'SEARCH_PEOPLE_SUCCESS';
export const SEARCH_PEOPLE_FAILURE = 'SEARCH_PEOPLE_FAILURE';

export const get_people = () => async dispatch => {
  try {
    const res = await makeRequest('people', null, { method: 'GET' });

    dispatch({
      type: GET_PEOPLE_SUCCESS,
      payload: res
    });
  } catch {
    dispatch({
      type: GET_PEOPLE_FAILURE
    });
  }
};

export const search_people = search => async dispatch => {
  try {
    const res = await makeRequest('people', search, { method: 'GET' });
    dispatch({
      type: SEARCH_PEOPLE_SUCCESS,
      payload: res
    });
  } catch {
    dispatch({
      type: SEARCH_PEOPLE_FAILURE
    });
  }
};
