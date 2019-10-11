import makeRequest from '../../utils/axiosSetup';

export const GET_PLANETS_SUCCESS = 'GET_PLANETS_SUCCESS';
export const GET_PLANETS_FAILURE = 'GET_PLANETS_FAILURE';

export const get_planet = () => async dispatch => {
  try {
    const res = await makeRequest('planets', null, { method: 'GET' });

    dispatch({
      type: GET_PLANETS_SUCCESS,
      payload: res
    });
  } catch {
    dispatch({
      type: GET_PLANETS_FAILURE
    });
  }
};
