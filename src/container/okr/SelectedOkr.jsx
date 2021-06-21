import React, { memo } from "react";

import { useStore } from "../../store/Store";
import { selectOkr } from "../../store/okr.actions";
import types from "../../utils/types";

const SelectedOkr = ({ children, okr }) => {
  const [_, dispatch] = useStore();

  const onClick = () => {
    dispatch(selectOkr(okr.id));
  };

  return (
    <React.Fragment>
      <div onClick={onClick}>{children}</div>
    </React.Fragment>
  );
};

SelectedOkr.propTypes = {
  children: types._children,
  okr: types._okr,
};

export default memo(SelectedOkr);
