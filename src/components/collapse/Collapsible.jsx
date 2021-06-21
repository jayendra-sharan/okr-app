import React, { memo, useState } from "react";

import "./../../styles/collapsible.css";
import types from "../../utils/types";

const Collapsible = ({ children, title, isCollapsible }) => {
  const [isOpen, setCollapseState] = useState(true);
  const toggleCollapse = () => setCollapseState(!isOpen);
  return (
    <div className="card-wrapper">
      {isOpen && <div className="left-border" />}
      <div className="parent">
        {isCollapsible && (
          <button className="collapse-button" onClick={toggleCollapse}>
            <i className={`arrow ${isOpen ? "open" : "close"}`} />
          </button>
        )}
        {title}
      </div>
      {isOpen && <div className="children">{children}</div>}
    </div>
  );
};

Collapsible.propTypes = {
  children: types._children,
  title: types._object,
  isCollapsible: types._boolean,
};

export default memo(Collapsible);
