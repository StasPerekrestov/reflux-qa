/** @jsx React.DOM */
//jsx is for ES6

var Reflux = require('reflux'),
	actions = require('./qa-actions.js'),
	Immutable = require('immutable');

var QAStore = Reflux.createStore({
	//listenables: actions,
	onLoad: function() {


	},
	onloadComplete: function() {

	},
	onloadError: function() {

	},
	init: function() {
		this.questions = Immutable
			.fromJS({
				"identification": {
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
					}
				},
				"section attrached": [],
				"Policy Information": [],
				"Nature of Business": []
			}).filter(function(m) {
				return m.count() > 0;
			}).toMap();

        this.listenTo(actions.load, this.reloadCallback);
        this.listenTo(actions.questionUpdated, this.questionUpdatedCallback)
    },
    questionUpdatedCallback: function(id, newVal){
    	this.questions = this.questions.updateIn(["identification", id], q => q.set("value", newVal));
    	this.trigger(this.questions);
    },
    reloadCallback: function() {
		this.trigger(this.questions);
    },
	getDefaultData: function() {
		return this.questions;
	}
});

module.exports = QAStore;