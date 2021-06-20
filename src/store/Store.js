import React from "react";
import { useEnhancedReducer } from "../utils/useEnhancedReducer";
import types from "../utils/types";

const Store = React.createContext();
Store.displayName = "Store";

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = useEnhancedReducer(reducer, initialState);

  return (
    <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
  );
};

StoreProvider.propTypes = {
  children: types._children,
  initialState: types._stateOfApp,
  reducer: types._function,
};
