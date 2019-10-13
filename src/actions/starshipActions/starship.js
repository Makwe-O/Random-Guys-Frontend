import makeRequest from '../../utils/axiosSetup';

export const GET_STARSHIPS_SUCCESS = 'GET_STARSHIPS_SUCCESS';
export const GET_STARSHIPS_FAILURE = 'GET_STARSHIPS_FAILURE';
export const GET_SINGLE_STARSHIP_SUCCESS = 'GET_SINGLE_STARSHIP_SUCCESS';
export const GET_SINGLE_STARSHIP_FAILURE = 'GET_SINGLE_STARSHIP_FAILURE';

export const get_starships = () => async dispatch => {
  try {
    const res = await makeRequest('starships', null, { method: 'GET' });

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
