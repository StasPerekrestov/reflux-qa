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
        this.listenTo(actions.load, this.reloadCallback);
    },
    reloadCallback: function() {
        // $.ajax("/api/cars", {}).done(function(data) {
        // 	debugger;
        //     this.trigger(data.arrayOfCars);
        // }.bind(this));
		this.trigger([3, 4, 7, 8]);
    },
	getDefaultData: function() {
		return "the initial data";
	}
});

module.exports = QAStore;