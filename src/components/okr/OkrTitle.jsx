import React from "react";
import types from "../../utils/types";

const OkrTitle = ({ children, classes }) => {
  return (
    <div className={`okr-title ${classes}`}>
      <span className="title">{children}</span>
    </div>
  );
};

OkrTitle.propTypes = {
  children: types._children,
  classes: types._string,
};

export default OkrTitle;
