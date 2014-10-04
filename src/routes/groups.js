var express = require('express'),
	router = express.Router();

// define the home page route
router.get('/', function(req, res) {
	var gs = {
		"Identification": ["123", "124", "125"],
		"Policy Information": ["567"],
		"Nature of Business": ["601"]
	};
	res.send(gs);
});

module.exports = router;