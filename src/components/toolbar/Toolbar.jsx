import React, { memo } from "react";

import Search from "../../container/tools/Search";
import ApplyFilter from "../../container/tools/ApplyFilter";
import "../../styles/toolbar.css";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <Search />
      <ApplyFilter />
    </div>
  );
};

export default memo(Toolbar);
