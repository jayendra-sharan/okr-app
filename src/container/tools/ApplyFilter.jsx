import React, { useCallback } from "react";

import Selector from "../../components/selector/Selector";
import { applyFilter } from "../../store/okr.actions";
import { useStore } from "../../store/Store";
import { getFilterOptions } from "./tools.utils";

const ApplyFilter = () => {
  const [state, dispatch] = useStore();
  const { options, selected } = getFilterOptions(state);

  const updateFilter = (filter) => {
    dispatch(applyFilter(filter));
  };

  if (options.length) {
    return (
      <Selector
        updateFilter={updateFilter}
        options={options}
        selected={selected}
      />
    );
  }
  return null;
};

export default ApplyFilter;
