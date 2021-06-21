export const APP_CONSTANTS = {
  OKR_API: "https://okrcentral.github.io/sample-okrs/db.json",
};

export const createCustomObjective = () => ({
  id: "CUSTOM",
  category: "None",
  title: "Key results without a defined objective",
  archived: "",
  metric_name: "",
  metric_start: "",
  metric_target: "",
  parent_objective_id: "",
});

export const displayPropertyMap = {
  category: "Category",
  title: "Title",
  archived: "Archived",
  metric_name: "Metric Name",
  metric_start: "Metric Start",
  metric_target: "Metric Target",
};
