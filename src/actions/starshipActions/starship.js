import makeRequest from '../../utils/axiosSetup';

export const GET_STARSHIPS_SUCCESS = 'GET_STARSHIPS_SUCCESS';
export const GET_STARSHIPS_FAILURE = 'GET_STARSHIPS_FAILURE';
export const SEARCH_STARSHIPS_SUCCESS = 'SEARCH_STARSHIPS_SUCCESS';
export const SEARCH_STARSHIPS_FAILURE = 'SEARCH_STARSHIPS_FAILURE';

export const get_starships = () => async dispatch => {
  try {
    const res = await makeRequest('starships', null, null, { method: 'GET' });

    dispatch({
      type: GET_STARSHIPS_SUCCESS,
      payload: res
    });
  } catch {
    dispatch({
      type: GET_STARSHIPS_FAILURE
    });
  }
};

export const search_starships = (search, page) => async dispatch => {
  try {
    const res = await makeRequest('starships', search, page, { method: 'GET' });

    dispatch({
      type: SEARCH_STARSHIPS_SUCCESS,
      payload: { res, search }
    });
  } catch {
    dispatch({
      type: SEARCH_STARSHIPS_FAILURE
    });
  }
};
