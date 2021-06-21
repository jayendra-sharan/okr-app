import React, { memo } from "react";
import types from "../../utils/types";

const Category = ({ category }) => {
  return (
    <span className="category">
      <span className="text">{category}</span>
    </span>
  );
};

Category.propTypes = {
  category: types._string,
};

export default memo(Category);
