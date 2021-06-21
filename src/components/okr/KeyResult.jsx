import React, { memo } from "react";
import types from "../../utils/types";
import { getAlphaSequence } from "../../utils/utils";
import OkrTitle from "./OkrTitle";

const KeyResult = ({ keyResult, index }) => {
  return (
    <div className="key-result">
      <div className="horizontal-line" />
      <OkrTitle classes="key-result-title" okr={keyResult}>
        <img className="title-img" src="./user.svg" />
        {`${getAlphaSequence(index)}${keyResult.title}`}
      </OkrTitle>
    </div>
  );
};

KeyResult.propTypes = {
  keyResult: types._okr,
  index: types._number,
};

export default memo(KeyResult);
