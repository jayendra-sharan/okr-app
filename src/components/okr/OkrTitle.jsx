import React, { memo } from "react";
import SelectedOkr from "../../container/okr/SelectedOkr";
import types from "../../utils/types";

const OkrTitle = ({ children, classes, okr }) => {
  return (
    <SelectedOkr okr={okr}>
      <div className={`okr-title ${classes}`}>
        <span className="title">{children}</span>
      </div>
    </SelectedOkr>
  );
};

OkrTitle.propTypes = {
  children: types._children,
  classes: types._string,
  okr: types._okr,
};

export default memo(OkrTitle);
