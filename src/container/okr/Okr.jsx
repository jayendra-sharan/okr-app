import React, { useEffect } from "react";
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

  return <OkrList okrList={getOkrListFromState(state)} />;
};

export default Okr;
