import { createCustomObjective } from "../../utils/constants";
import { curry } from "../../utils/utils";

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

export const getOkrListFromState = (state) => {
  const { okrList, filter } = state;

  const filterdList = [
    ...getFilteredList(okrList, "category", filter),
    createCustomObjective(),
  ];

  const objectiveKeyResultHash = createObejctiveKeyResultHash(
    createFilteredList(filterdList)(isObjective)
  );

  const keyResultList = createFilteredList(filterdList)(isKeyResult);

  return updateKeyResultsInObjective(objectiveKeyResultHash, keyResultList);
};
