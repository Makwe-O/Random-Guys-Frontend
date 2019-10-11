import makeRequest from '../../utils/axiosSetup';

export const GET_PEOPLE_SUCCESS = 'GET_PEOPLE_SUCCESS';
export const GET_PEOPLE_FAILURE = 'GET_PEOPLE_FAILURE';

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
