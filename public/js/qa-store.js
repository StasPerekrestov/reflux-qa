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
							.Map()
							.set("name", "John Doe")
							.set("ssn", "12342")
							.set("state", "CA");
        this.listenTo(actions.load, this.reloadCallback);
    },
    reloadCallback: function() {
    	this.questions = this.questions
    					.set("test", "test value");
		this.trigger(this.questions);
    },
	getDefaultData: function() {
		return this.questions;
	}
});

module.exports = QAStore;