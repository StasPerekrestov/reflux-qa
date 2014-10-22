var Reflux = require('reflux');

var QAActions = Reflux.createActions([
  'load',         // initiates the async load
  'loadComplete', // when the load is complete
  'loadError',     // when the load has failed
  'changeSelectedGroup'
]);

QAActions.questionUpdated = Reflux.createAction({sync: true});
module.exports = QAActions;