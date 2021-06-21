import React from "react";

import Objective from "./Objective";
import types from "../../utils/types";

const OkrList = ({ okrList }) => {
  return (
    <div>
      {Object.keys(okrList).map((key, index) => (
        <Objective
          key={key}
          serialNumber={index + 1}
          objective={okrList[key].objective}
          keyResults={okrList[key].keyResults}
        />
      ))}
    </div>
  );
};

OkrList.propTypes = {
  okrList: types._formattedOkrs,
};

export default OkrList;
