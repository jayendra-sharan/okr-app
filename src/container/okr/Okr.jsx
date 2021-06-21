import React, { useEffect } from "react";

import Toolbar from "./../../components/toolbar/Toolbar";
import FullPageLoader from "../../components/loader/FullPageLoader";
import OkrList from "../../components/okr/OkrList";
import { getOkrList } from "../../store/okr.actions";
import { useStore } from "../../store/Store";
import { isFetchInProgress, getOkrListFromState } from "./okr.utils";

const Okr = () => {
  const [state, dispatch] = useStore();

  useEffect(() => {
    dispatch(getOkrList());
  }, []);

  if (isFetchInProgress(state)) {
    return <FullPageLoader />;
  }

  return (
    <React.Fragment>
      <Toolbar />
      <OkrList okrList={getOkrListFromState(state)} />
    </React.Fragment>
  );
};

export default Okr;
