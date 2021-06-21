import React, { memo } from "react";
import types from "../../utils/types";

const Selector = ({ options, selected, updateFilter }) => {
  const onChange = (e) => {
    updateFilter && updateFilter(e.target.value);
  };
  return (
    <select className="tools" onChange={onChange} value={selected}>
      <option value="">Select a category</option>
      {options.map((f) => (
        <option key={f} value={f}>
          {f}
        </option>
      ))}
    </select>
  );
};

Selector.propTypes = {
  options: types._listOfString,
  selected: types._string,
  updateFilter: types._function,
};
export default memo(Selector);
