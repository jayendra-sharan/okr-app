import React from "react";

import types from "../../utils/types";
import "../../styles/loader.css";

const FullPageLoader = ({ text }) => {
  return (
    <div className="loaderWrapper">
      <div className="loader"></div>
      <p className="loaderText">{text}</p>
    </div>
  );
};

FullPageLoader.propTypes = {
  text: types._string,
};

FullPageLoader.defaultProps = {
  text: "Please wait...",
};

export default FullPageLoader;
