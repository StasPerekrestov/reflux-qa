/** @jsx React.DOM */
//jsx is for ES6

var Reflux = require('reflux'),
	actions = require('./qa-actions'),
	Immutable = require('immutable');

var QAStore = Reflux.createStore({
	listenables: actions,
	onLoad: function() {
		$.when($.get('/api/qa'), $.get('/api/groups'))
		.then(function(qa, groups){
			this.groups = Immutable.fromJS(groups[0]);
			this.questions = Immutable.fromJS(qa[0]);
			var selectedGroup = "Identification";
			this.store = this.getNewState(selectedGroup);
			this.trigger(this.store);
		}.bind(this));
	},
	onloadComplete: function() {

	},
	onloadError: function() {

	},
	onQuestionUpdated: function(id, newVal) {
		//todo: avoid duplicate questions store
		//currently it's a performance trick to avoid this.store = this.getNewState(selectedGroup);
		this.questions = this.questions.updateIn([id], q => q.set("value", newVal));
		this.store = this.store.updateIn(["questions", id], q => q.set("value", newVal));
		this.trigger(this.store);
	},
	onChangeSelectedGroup: function(groupNameToSelect) {
		this.store = this.getNewState(groupNameToSelect);
		this.trigger(this.store);
	},
	init: function() {
		this.groups = Immutable.fromJS({"Identification":[]});
		this.questions = Immutable.Map();
		var selectedGroup = "Identification";
		this.store = this.getNewState(selectedGroup); //empty store
	},
	getNewState: function(selectedGroup) {
		var questionKeys = this.groups.get(selectedGroup),
			groupQuestions = questionKeys.reduce((r, n) => r.set(n, this.questions.get(n)), Immutable.Map());
		return Immutable.Map({
			groups: this.groups,
			questions: groupQuestions,
			selectedGroup: selectedGroup
		});
	},
	getDefaultData: function() {
		return this.store;
	}
});

module.exports = QAStore;