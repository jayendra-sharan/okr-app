/**
 * @fileoverview Utility to create async action dispatcher.
 */

export const createAsyncDispatch = (dispatch) => {
  return (action) => {
    if (action instanceof Function) {
      return action(dispatch);
    }
    return dispatch(action);
  }
}
