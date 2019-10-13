import makeRequest from '../../utils/axiosSetup';

export const GET_SINGLE_DATA_SUCCESS = 'GET_SINGLE_DATA_SUCCESS';
export const GET_SINGLE_DATA_FAILURE = 'GET_SINGLE_DATA_FAILURE';

export const get_single_data = url => async dispatch => {
  try {
    const res = await makeRequest(url, null, { method: 'GET' });
    dispatch({
      type: GET_SINGLE_DATA_SUCCESS,
      payload: res
    });
  } catch {
    dispatch({
      type: GET_SINGLE_DATA_FAILURE,
      payload: { error: true }
    });
  }
};
