var express = require('express'),
    router = express.Router(),
    app = express(),
    path = require('path'),
    errorHandler = require('errorhandler');


app.set('port', process.env.PORT || 8080);

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/api', function(req, res) {
  res.send('Birds home page');
});

app.use(express.static(path.join("./", 'public')));



app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});