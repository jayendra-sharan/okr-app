import { createCustomObjective } from "../../utils/constants";
import { curry, isNullOrEmpty } from "../../utils/utils";

export const isFetchInProgress = (state) => state.inProgress;

export const isObjective = (okr) => !okr.parent_objective_id;
export const isKeyResult = (okr) => okr.parent_objective_id;

const createFilteredList = curry((okrList, filterType) =>
  okrList.filter(filterType)
);

const appendKeyResultToObjective = (okrHash, parentObjectiveId, keyResult) => ({
  [parentObjectiveId]: {
    ...okrHash[parentObjectiveId],
    keyResults: [...okrHash[parentObjectiveId].keyResults, keyResult],
  },
});

const getObjectiveId = (okrHash, { parent_objective_id: parentObjectiveId }) =>
  okrHash[parentObjectiveId] ? parentObjectiveId : "CUSTOM";

const updateKeyResultsInObjective = (okrHash, keyResultList) =>
  keyResultList.reduce((updatedOkrHash, keyResult) => {
    const parentObjectiveId = getObjectiveId(updatedOkrHash, keyResult);
    return {
      ...updatedOkrHash,
      ...appendKeyResultToObjective(
        updatedOkrHash,
        parentObjectiveId,
        keyResult
      ),
    };
  }, okrHash);

const createObejctiveKeyResultHash = (objectiveList) =>
  objectiveList.reduce((okrHash, objective) => {
    return {
      ...okrHash,
      [objective.id]: {
        objective,
        keyResults: [],
      },
    };
  }, {});

const getFilteredList = (list, key, value) =>
  value ? list.filter((kr) => kr[key] === value) : list;

const filterListOnQuery = (list, query) =>
  list.filter((okr) => okr.title.match(query));

const removeDuplicates = (list) =>
  list.filter(
    (okr, index, arr) => arr.findIndex((o) => o.id === okr.id) === index
  );

const addParentInQueriedList = (list, queryResult) => {
  // if (list.length === queryResult.length) return list;
  const parentObjectiveIdList = queryResult.map(
    (okr) => okr.parent_objective_id
  );
  const objectiveList = list.filter(
    (okr) => parentObjectiveIdList.indexOf(okr.id) > -1
  );
  return removeDuplicates([...objectiveList, ...queryResult]);
};

export const getOkrListFromState = (state) => {
  const { okrList, filter, query } = state;
  if (!okrList.length) {
    return okrList;
  }

  const regex = new RegExp(query, "ig");

  const queriedOkrList = filterListOnQuery(okrList, query);

  const queriedOkrListWithParent = addParentInQueriedList(
    okrList,
    queriedOkrList
  );

  const filterdList = [
    ...getFilteredList(queriedOkrListWithParent, "category", filter),
    createCustomObjective(),
  ];

  const objectiveKeyResultHash = createObejctiveKeyResultHash(
    createFilteredList(filterdList)(isObjective)
  );

  const keyResultList = createFilteredList(filterdList)(isKeyResult);

  return updateKeyResultsInObjective(objectiveKeyResultHash, keyResultList);
};

export const getSelectedOkrFromState = (state) => {
  const { selected } = state;
  const { objective, keyResult } = selected;
  return {
    objective,
    keyResult,
  };
};
