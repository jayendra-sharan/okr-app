import React, { memo } from "react";

import ApplyFilter from "../../container/tools/ApplyFilter";
import "../../styles/toolbar.css";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <ApplyFilter />
    </div>
  );
};

export default memo(Toolbar);
