import { fetchFromUrl } from "../utils/async"
import { APP_CONSTANTS } from "../utils/constants"

export const OKR_ACTIONS = {
  FETCH_OKR_LIST: 'APP/OKR/FETCH_OKR_LIST',
  FETCH_OKR_SUCCESS: 'APP/OKR/FETCH_OKR_SUCCESS',
  FETCH_OKR_FAILED: 'APP/OKR/FETCH_OKR_FAILED',
}

const fetchOkrSuccess = (data) => ({
  type: OKR_ACTIONS.FETCH_OKR_SUCCESS,
  payload: data
})

const fetchOkrFailed = (message) => ({
  type: OKR_ACTIONS.FETCH_OKR_FAILED,
  payload: message
})

export const getOkrList = dispatch => {
  return (dispatch) => {
    dispatch({
      type: OKR_ACTIONS.FETCH_OKR_LIST,
    })
    fetchFromUrl(APP_CONSTANTS.OKR_API)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchOkrSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchOkrFailed(error.message))
      })
  }
}
