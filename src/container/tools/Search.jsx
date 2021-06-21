import React, { memo, useRef, useState } from "react";
import { searchOkr } from "../../store/okr.actions";
import { useStore } from "../../store/Store";
import { debounce } from "../../utils/utils";

const Search = () => {
  const [state, dispatch] = useStore();
  const [query, updateQuery] = useState(state.query);
  const dispatchAction = (query) => {
    dispatch(searchOkr(query));
  };
  const debouncedDispatch = useRef(debounce(dispatchAction, 500));

  const onChange = ({ target }) => {
    updateQuery(target.value);
    debouncedDispatch.current(target.value);
  };

  return (
    <div className="tools">
      <input
        type="text"
        onChange={onChange}
        value={query}
        placeholder="Start typing here..."
      />
    </div>
  );
};

export default memo(Search);
