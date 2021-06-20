import React from "react";

import KeyResult from "./KeyResult";
import types from "../../utils/types";
import Collapsible from "../collapse/Collapsible";
import OkrTitle from "./OkrTitle";

const getTitleComponent = (serialNumber, title) => {
  return (
    <React.Fragment>
      <img className="objective-img title-img" src="./user.svg" />
      <OkrTitle classes="objective-title">{`${serialNumber}. ${title}`}</OkrTitle>
    </React.Fragment>
  );
};

const Objective = ({ serialNumber, objective, keyResults }) => {
  return (
    <div>
      <Collapsible title={getTitleComponent(serialNumber, objective.title)}>
        {keyResults.map((keyResult, index) => (
          <KeyResult key={keyResult.id} keyResult={keyResult} index={index} />
        ))}
      </Collapsible>
    </div>
  );
};

Objective.propTypes = {
  objective: types._okr,
  keyResults: types._okrList,
  serialNumber: types._number,
};

export default Objective;
