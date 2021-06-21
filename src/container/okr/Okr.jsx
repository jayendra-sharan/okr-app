import React, { memo, useEffect } from "react";

import Toolbar from "./../../components/toolbar/Toolbar";
import FullPageLoader from "../../components/loader/FullPageLoader";
import OkrList from "../../components/okr/OkrList";
import ShowModal from "./ShowModal";
import { getOkrList, selectOkr } from "../../store/okr.actions";
import { useStore } from "../../store/Store";
import {
  isFetchInProgress,
  getOkrListFromState,
  getSelectedOkrFromState,
} from "./okr.utils";

const Okr = () => {
  const [state, dispatch] = useStore();

  useEffect(() => {
    dispatch(getOkrList());
  }, []);

  if (isFetchInProgress(state)) {
    return <FullPageLoader />;
  }

  const selected = getSelectedOkrFromState(state);
  const clearSelected = () => {
    dispatch(selectOkr(""));
  };

  return (
    <React.Fragment>
      <Toolbar />
      <ShowModal {...selected} clear={clearSelected} />
      <OkrList okrList={getOkrListFromState(state)} />
    </React.Fragment>
  );
};

export default memo(Okr);
