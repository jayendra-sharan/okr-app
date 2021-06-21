/**
 * @fileoverview contains reducer and initial state of OKR.
 */
import { createCustomObjective } from "../utils/constants";
import { OKR_ACTIONS } from "./okr.actions";

export const initialState = {
  inProgress: false,
  okrList: [],
  errorMessage: "",
  filter: "",
  selected: {
    objective: null,
    keyResult: null,
  },
  query: "",
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
    case OKR_ACTIONS.APPLY_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case OKR_ACTIONS.SELECT_OKR:
      return {
        ...state,
        selected: selectOkr(state, action),
      };
    case OKR_ACTIONS.SEARCH_OKR:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

const selectOkr = (state, action) => {
  if (action.payload === "") {
    return {
      objective: null,
      keyResult: null,
    };
  } else {
    const keyResult = state.okrList.find((okr) => okr.id === action.payload);
    return {
      objective: state.okrList.find(
        (okr) => okr.id === keyResult.parent_objective_id
      ),
      keyResult,
    };
  }
};
