var express = require('express'),
	router = express.Router();

// define the home page route
router.get('/', function(req, res) {
	var qs = {
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
	};
	res.send(qs);
});

module.exports = router;
