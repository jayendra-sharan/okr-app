import React, { memo } from "react";

import KeyResult from "./KeyResult";
import types from "../../utils/types";
import Collapsible from "../collapse/Collapsible";
import OkrTitle from "./OkrTitle";
import Category from "../category/Category";
import Highlighted from "../../container/okr/Highlighted";

const getTitleComponent = (serialNumber, objective) => {
  return (
    <React.Fragment>
      <img
        alt={objective.title}
        className="objective-img title-img"
        src="./user.svg"
      />
      <OkrTitle classes="objective-title" okr={objective}>
        <Highlighted text={`${serialNumber}. ${objective.title}`} />
        <Category category={objective.category} />
      </OkrTitle>
    </React.Fragment>
  );
};

const Objective = ({ serialNumber, objective, keyResults }) => {
  return (
    <div>
      <Collapsible
        title={getTitleComponent(serialNumber, objective)}
        isCollapsible={keyResults.length !== 0}
      >
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

export default memo(Objective);
