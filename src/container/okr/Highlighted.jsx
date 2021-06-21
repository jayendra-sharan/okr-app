import React, { memo } from "react";

import { getHighlightedString } from "../../utils/utils";
import { useStore } from "../../store/Store";
import types from "../../utils/types";

const Highlighted = ({ text }) => {
  const [state] = useStore();
  const { query } = state;
  return (
    <span
      dangerouslySetInnerHTML={{ __html: getHighlightedString(text, query) }}
    />
  );
};

Highlighted.propTypes = {
  text: types._string,
};

export default memo(Highlighted);
