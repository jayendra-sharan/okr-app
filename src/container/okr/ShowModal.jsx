import React, { memo } from "react";

import Modal from "../../components/modal/Modal";
import types from "../../utils/types";
import {
  showReadableText,
  filterDisplayProperties,
  isNullOrEmpty,
} from "../../utils/utils";

const renderObjective = (objective) => (
  <React.Fragment>
    {objective.map((o) => {
      return (
        <div key={o.label} className="fieldset">
          <div title={o.label} className="okr-label">
            {o.label}:{" "}
          </div>
          <div className="okr-value">{showReadableText(o.value)}</div>
        </div>
      );
    })}
  </React.Fragment>
);

const ShowModal = ({ objective, keyResult, clear }) => {
  if (isNullOrEmpty(objective) && isNullOrEmpty(keyResult)) {
    return null;
  }
  if (isNullOrEmpty(objective)) {
    return (
      <Modal closeCallback={clear} title={keyResult.title}>
        {renderObjective(filterDisplayProperties(keyResult))}
      </Modal>
    );
  }
  return (
    <Modal closeCallback={clear} title={objective.title}>
      {renderObjective(filterDisplayProperties(keyResult))}
    </Modal>
  );
};

ShowModal.propTypes = {
  objective: types._ookr,
  keyResult: types._ookr,
  clear: types._function,
};

export default memo(ShowModal);
