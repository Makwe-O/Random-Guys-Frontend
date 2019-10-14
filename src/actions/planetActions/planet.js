import makeRequest from '../../utils/axiosSetup';

export const GET_PLANETS_SUCCESS = 'GET_PLANETS_SUCCESS';
export const GET_PLANETS_FAILURE = 'GET_PLANETS_FAILURE';
export const SEARCH_PLANETS_SUCCESS = 'SEARCH_PLANETS_SUCCESS';
export const SEARCH_PLANETS_FAILURE = 'SEARCH_PLANETS_FAILURE';

export const get_planet = () => async dispatch => {
  try {
    const res = await makeRequest('planets', null, null, { method: 'GET' });

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

export const search_planets = (search, page) => async dispatch => {
  try {
    const res = await makeRequest('planets', search, page, { method: 'GET' });
    dispatch({
      type: SEARCH_PLANETS_SUCCESS,
      payload: { res, search }
    });
  } catch {
    dispatch({
      type: SEARCH_PLANETS_FAILURE
    });
  }
};
