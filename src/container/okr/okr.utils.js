import { curry } from "../../utils/utils";

export const isFetchInProgress = (state) => state.inProgress;

const isObjective = (okr) => !okr.parent_objective_id;
const isKeyResult = (okr) => okr.parent_objective_id;

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

export const getOkrListFromState = (state) => {
  const { okrList } = state;

  const objectiveKeyResultHash = createObejctiveKeyResultHash(
    createFilteredList(okrList)(isObjective)
  );

  const keyResultList = createFilteredList(okrList)(isKeyResult);

  return updateKeyResultsInObjective(objectiveKeyResultHash, keyResultList);
};
