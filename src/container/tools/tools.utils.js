import { isObjective } from "../okr/okr.utils";

const isNewItem = (list, newItem) => !list.find((item) => item === newItem);

export const getFilterOptions = (state) => {
  const { okrList, filter } = state;
  const options = okrList.reduce((filterOptions, keyResult) => {
    if (
      isObjective(keyResult) &&
      isNewItem(filterOptions, keyResult.category)
    ) {
      return [...filterOptions, keyResult.category];
    }
    return filterOptions;
  }, []);

  return {
    options,
    selected: filter,
  };
};
