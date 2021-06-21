import React, { memo, useState } from "react";

import "../../styles/modal.css";
import types from "../../utils/types";

const Modal = ({ title, children, closeCallback }) => {
  const [show, toggleShow] = useState(true);
  const onCloseClick = () => {
    toggleShow((show) => !show);
    closeCallback && closeCallback();
  };
  if (!show) return null;
  return (
    <React.Fragment>
      <div className="overlay" />
      <div className="modal-box">
        <div className="modal-title-bar">
          <div className="modal-title">{title}</div>
          <div className="modal-close" onClick={onCloseClick}>
            x
          </div>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </React.Fragment>
  );
};

Modal.defaultProps = {
  title: "this is a test modal",
};

Modal.propTypes = {
  title: types._string,
  children: types._children,
  closeCallback: types._ofunction,
};

export default memo(Modal);
