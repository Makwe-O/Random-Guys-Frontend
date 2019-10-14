import makeRequest from '../../utils/axiosSetup';

export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
export const GET_CATEGORY_FAILURE = 'GET_CATEGORY_FAILURE';

export const get_category = (category, page) => async dispatch => {
  try {
    const res = await makeRequest(category, null, page, { method: 'GET' });

    dispatch({
      type: GET_CATEGORY_SUCCESS,
      payload: res
    });
  } catch (error) {
    dispatch({
      type: GET_CATEGORY_FAILURE,
      payload: { error: true }
    });
  }
};
