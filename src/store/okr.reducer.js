/**
 * @fileoverview contains reducer and initial state of OKR.
 */
import { OKR_ACTIONS } from "./okr.actions";

export const initialState = {
  inProgress: false,
  okrList: [],
  errorMessage: "",
};

export const okrReducer = (state = initialState, action) => {
  switch (action.type) {
    case OKR_ACTIONS.FETCH_OKR_LIST:
      return {
        ...state,
        inProgress: true,
      };
    case OKR_ACTIONS.FETCH_OKR_SUCCESS:
      return {
        ...state,
        okrList: action.payload.data,
        inProgress: false,
      };
    case OKR_ACTIONS.FETCH_OKR_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
        inProgress: false,
      };
    default:
      return state;
  }
};
