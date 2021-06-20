/**
 * @fileoverview a custom hook to add logger to useReducer.
 */
import { useEffect, useMemo, useReducer, useRef } from "react"
import { createAsyncDispatch } from "./create.async.dispatch";

/**
 * Enhanced reducer adds the capability to handle async actions with
 * createAsyncDispatch and adds logger (prev state, next state);
 */
export const useEnhancedReducer = (...args) => {
  const initialState = args[1];
  let prevState = useRef(initialState);
  const [state, dispatch] = useReducer(...args);

  const asyncDispatch = useMemo(() => createAsyncDispatch(dispatch), [dispatch]);

  useEffect(() => {
    if (state !== initialState) {
      console.log('Prev state: ', prevState.current);
      console.log('Next state: ', state);
    }
    prevState.current = state;
  }, [state]);

  return [state, asyncDispatch];
}
