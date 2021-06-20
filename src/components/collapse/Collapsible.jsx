import React, { useState } from "react";

import "./../../styles/collapsible.css";
import types from "../../utils/types";

const Collapsible = ({ children, title }) => {
  const [isOpen, setCollapseState] = useState(true);
  const toggleCollapse = () => setCollapseState(!isOpen);
  return (
    <div className="card-wrapper">
      {isOpen && <div className="left-border" />}
      <div className="parent">
        <button className="collapse-button" onClick={toggleCollapse}>
          <i className={`arrow ${isOpen ? "open" : "close"}`} />
        </button>
        {title}
      </div>
      {isOpen && <div className="children">{children}</div>}
    </div>
  );
};

Collapsible.propTypes = {
  children: types._children,
  title: types._object,
};

export default Collapsible;
