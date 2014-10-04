/** @jsx React.DOM */
//jsx is for ES6

var Reflux = require('reflux'),
	actions = require('./qa-actions.js'),
	Immutable = require('immutable');

var QAStore = Reflux.createStore({
	listenables: actions,
	onLoad: function() {
		/*
			an ajax call may be performed
			The current example inits required data in init method.

			$.get('...', function(data){
				//set state..
			}.bind(this));
		*/
		this.trigger(this.store);
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
		var groups = Immutable.fromJS({
			"Identification": ["123", "124", "125"],
			"Policy Information": ["567"],
			"Nature of Business": ["601"]
		});
		var questions = Immutable.fromJS({
				"123": {
					name: "insured",
					type: "text",
					value: "John Doe"
				},
				"124": {
					name: "fax",
					type: "text",
					value: ""
				},
				"125": {
					name: "ssn",
					type: "text",
					value: ""
				},
				"567": {
					name: "expiration date",
					type: "text",
					value: ""
				},
				"601": {
					name: "A property",
					type: "text",
					value: ""
				}
			});

		this.groups = groups;
		this.questions = questions;
		var selectedGroup = "Identification";
		this.store = this.getNewState(selectedGroup);
	},
	getNewState: function(selectedGroup){
		var questionKeys = this.groups.get(selectedGroup);
		var groupQuestions = questionKeys.reduce((r, n) => r.set(n, this.questions.get(n)), Immutable.Map());
		return Immutable.Map({groups: this.groups, questions: groupQuestions, selectedGroup: selectedGroup});
	},
	getDefaultData: function() {
		return this.store;
	}
});

module.exports = QAStore;