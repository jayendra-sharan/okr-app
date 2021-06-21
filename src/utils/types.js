/**
 * @fileoverview extends PropTypes to create maintainable data types.
 */

import PropTypes from "prop-types";

const okr = PropTypes.shape({
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  metric_name: PropTypes.string.isRequired,
  metric_start: PropTypes.string.isRequired,
  metric_target: PropTypes.string.isRequired,
  parent_objective_id: PropTypes.string.isRequired,
  archived: PropTypes.string.isRequired,
});

const stateOfApp = PropTypes.shape({
  inProgress: PropTypes.bool.isRequired,
  okrList: PropTypes.arrayOf(okr),
  errorMessage: PropTypes.string,
  filter: PropTypes.string,
  selected: PropTypes.shape({
    objective: okr,
    keyResult: okr,
  }),
  query: "",
});

const types = {
  _function: PropTypes.func.isRequired,
  _ofunction: PropTypes.func,
  _object: PropTypes.object.isRequired,
  _boolean: PropTypes.bool.isRequired,
  _number: PropTypes.number.isRequired,
  _string: PropTypes.string.isRequired,
  _okr: okr.isRequired,
  _ookr: okr,
  _okrList: PropTypes.arrayOf(okr).isRequired,
  _stateOfApp: stateOfApp.isRequired,
  _children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  _formattedOkrs: PropTypes.objectOf(
    PropTypes.shape({
      objective: okr.isRequired,
      keyResults: PropTypes.arrayOf(okr),
    })
  ).isRequired,
  _listOfString: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default types;
