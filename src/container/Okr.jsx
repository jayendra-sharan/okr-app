import React, { useEffect } from "react";
import { getOkrList } from "../store/okr.actions";
import { useStore } from "../store/Store";

const Okr = () => {
  const [_, dispatch] = useStore();

  useEffect(() => {
    dispatch(getOkrList());
  }, []);
  return <div>Okr</div>;
};

export default Okr;
