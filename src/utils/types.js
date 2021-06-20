/**
 * @fileoverview extends PropTypes to create maintainable data types.
 */

import PropTypes from 'prop-types';

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
  errorMessage: ''
});

const types = {
  _function: PropTypes.func.isRequired,
  _object: PropTypes.object.isRequired,
  _boolean: PropTypes.bool.isRequired,
  _number: PropTypes.number.isRequired,
  _string: PropTypes.string.isRequired,
  _okr: okr.isRequired,
  _okrList: PropTypes.arrayOf(okr).isRequired,
  _stateOfApp: stateOfApp.isRequired,
  _children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
}

export default types;